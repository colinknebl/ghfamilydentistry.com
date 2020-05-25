import React from 'react';
import styled from 'styled-components';

import { ModalContext } from '../hooks/useModal';

interface IOpenModalProps {
    text: string;
}

export function OpenModal(props: IOpenModalProps) {
    const { setIsModalOpen } = React.useContext(ModalContext);

    return (
        <StyledOpenModal>
            <button onClick={() => setIsModalOpen(true)}>{props.text}</button>
        </StyledOpenModal>
    );
}

const StyledOpenModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--danger-button-color);
        cursor: pointer;
        margin: 40px 0;

        &:hover {
            text-decoration: underline;
        }
    }
`;
