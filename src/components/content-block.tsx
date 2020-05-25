import React from 'react';

import type {
    ContentBlock as ContentBlockType,
    MarkDef,
    Block,
    BlockChild,
} from '../gql/queries/modal';
import { List } from '../gql/queries/modal';
import { parseTag } from '../gql/queries/modal';

export function ContentBlock({ block }: { block: Block }) {
    const { tag, children, markDefs } = block;

    const childElements = parseChildren(children, markDefs);
    return React.createElement(tag, {}, childElements);
}

export function ContentList({ list }: { list: List }) {
    return parseList(list);
}

function parseList(list: List) {
    const listItems = list.children.map((child) => {
        if (child instanceof List) {
            return parseList(child);
        }
        return React.createElement(
            child.tag,
            {
                key: child.key,
            },
            parseChildren(child.children, child.markDefs)
        );
    });

    return React.createElement(
        list.tag,
        {
            key: list.key,
        },
        listItems
    );
}

function createNestedElements(
    tags: string[],
    innerText: string
): React.ReactNode {
    if (tags.length > 1) {
        return React.createElement(
            parseTag(tags[0]),
            {},
            createNestedElements(tags.slice(1), innerText)
        );
    } else {
        return React.createElement(parseTag(tags[0]), {}, innerText);
    }
}

function parseChildren(children: BlockChild[], markDefs: MarkDef[]) {
    return children.map((child) => {
        let content: React.ReactNode = child.text;

        if (child.marks.length) {
            const def = markDefs.find((mark) => mark._key === child.marks[0]);
            if (def) {
                content = React.createElement(
                    parseTag(def._type),
                    {
                        href: def.href,
                        key: def._key,
                    },
                    child.text
                );
            } else {
                content = createNestedElements(child.marks, child.text);
            }
        }

        return React.createElement(
            child.tag,
            {
                key: child.key,
            },
            content
        );
    });
}
