import React from 'react';
import styled from 'styled-components';

import type { Modal as ModalType } from '../gql/queries/modal';
import { List, Block } from '../gql/queries/modal';
import { ContentBlock, ContentList } from './content-block';

interface IModalProps {
    modal: ModalType;
}

export function Modal({ modal }: IModalProps) {
    return (
        <StyledModal>
            {modal.content.blocks.map((block) => {
                if (block instanceof Block) {
                    return <ContentBlock key={block.key} block={block} />;
                } else {
                    return <ContentList key={block.key} list={block} />;
                }
            })}
        </StyledModal>
    );
}

const StyledModal = styled.div``;
