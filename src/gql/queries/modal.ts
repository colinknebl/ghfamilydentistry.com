import { useStaticQuery, graphql } from 'gatsby';

enum ContentBlockStyle {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p',
}

interface _Modal {
    name: string;
    title: string;
    publishedAt: string;
    _rawContent: ContentBlock[];
}

type LinkQueryResult = {
    sanityModal: QueriedModal;
};

export interface Modal extends Omit<_Modal, '_rawContent'> {
    content: Content;
}

interface QueriedModal extends _Modal {
    id: string;
}

export const getModal = () => {
    const { sanityModal } = useStaticQuery<LinkQueryResult>(graphql`
        {
            sanityModal {
                id
                title
                publishedAt
                _rawContent
            }
        }
    `);

    return {
        id: sanityModal.id,
        title: sanityModal.title,
        publishedAt: sanityModal.publishedAt,
        name: sanityModal.name,
        content: new Content(sanityModal._rawContent),
    };
};

class Content {
    private _rawContent: ContentBlock[];
    public blocks: Array<Block | List>;

    constructor(rawContent: ContentBlock[]) {
        this._rawContent = rawContent;

        let lastAdded;
        this.blocks = this._rawContent.reduce((content, block) => {
            if (block.listItem) {
                if (
                    lastAdded instanceof List &&
                    (lastAdded as List).level === block.level &&
                    (lastAdded as List).tag === parseTag(block.listItem)
                ) {
                    this._addChildrenToList([block], lastAdded as List);
                } else if (
                    lastAdded instanceof List &&
                    block.level > (lastAdded as List).level
                ) {
                    const subList = (lastAdded as List).addSubList(
                        block._key,
                        block._type,
                        block.level,
                        block.listItem
                    );
                    this._addBlock(block, subList);
                    lastAdded = subList;
                } else {
                    const list = new List(
                        block._key,
                        block._type,
                        block.level,
                        block.listItem
                    );
                    this._addChildrenToList([block], list);
                    lastAdded = list;
                    content.push(lastAdded);
                }
            } else {
                lastAdded = new Block(block.style, block);
                content.push(lastAdded);
            }

            return content;
        }, [] as Block[]);
    }

    private _addBlock(rawBlock: ContentBlock, list: List) {
        list.addListBlock(rawBlock);
    }

    private _addChildrenToList(block: ContentBlock[], list: List) {
        block.forEach((child) => {
            list.addListBlock(child);
        });
    }
}

export type MarkDef = {
    href: string;
    _key: string;
    _type: 'link';
};

class Item {
    public key: string;
    public type: string;
    public tag: string;

    constructor(key: string, type: string) {
        this.key = key;
        this.type = type;
        this.tag = parseTag(type);
    }
}

export type Child = {
    marks: string[];
    text: string;
    _key: string;
    _type: 'span';
};

export class BlockChild extends Item {
    constructor(
        _key: string,
        _type: string,
        public marks: string[],
        public text: string
    ) {
        super(_key, _type);
    }
}

export type ContentBlock = {
    children: Child[];
    markDefs: MarkDef[];
    style: ContentBlockStyle;
    listItem?: 'number' | 'bullet';
    level?: number;
    _key: string;
    _type: 'block';
};

export class Block extends Item {
    private _rawBlock: ContentBlock;
    public children: BlockChild[];
    public markDefs: MarkDef[];
    public tag: string;

    constructor(rawTag: string, rawBlock: ContentBlock) {
        super(rawBlock._key, rawBlock._type);
        this.tag = parseTag(rawTag);
        this.markDefs = rawBlock.markDefs;
        this.children = rawBlock.children.map((child) => {
            return new BlockChild(
                child._key,
                child._type,
                child.marks,
                child.text
            );
        });
        this._rawBlock = rawBlock;
    }
}

export class List extends Item {
    public children: Array<Block | List> = [];
    public tag: string;
    public level: number;

    constructor(key: string, type: string, level: number, listItem: string) {
        super(key, type);
        this.level = level;
        this.tag = parseTag(listItem);
    }

    public addListBlock(rawBlock: ContentBlock) {
        this.children.push(new Block('li', rawBlock));
    }

    public addSubList(
        key: string,
        type: string,
        level: number,
        listItem: string
    ) {
        const subList = new List(key, type, level, listItem);
        this.children.push(subList);
        return subList;
    }
}

export function parseTag(tag: string) {
    switch (tag) {
        case 'em':
            return 'em';
        case 'strong':
            return 'strong';
        case 'underline':
            return 'u';
        case 'link':
            return 'a';
        case 'strike-through':
            return 'strike';
        case 'normal':
        case 'p':
            return 'p';
        case 'bullet':
            return 'ul';
        case 'number':
            return 'ol';
        case 'li':
            return 'li';
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'h5':
            return 'h5';
        case 'h6':
            return 'h6';
        default:
            return 'span';
    }
}
