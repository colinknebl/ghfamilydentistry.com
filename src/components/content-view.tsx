import React from 'react';
import { Content } from '../models/content/Content';
import { Block } from '../models/content/Block';

import { ContentBlock, ContentList } from './content-block';

interface IContentProps {
    content: Content;
}

export function ContentView({ content }: IContentProps) {
    return (
        <>
            {content.blocks.map((block) => {
                if (block instanceof Block) {
                    return <ContentBlock key={block.key} block={block} />;
                } else {
                    return <ContentList key={block.key} list={block} />;
                }
            })}
        </>
    );
}
