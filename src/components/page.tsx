/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

import { Header } from './header';
import { Footer } from './footer';
import { Modal } from './modal';
import { getModal } from '../gql/queries/modal';
import './layout.css';

const Page = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [hasModalShown, setHasModalShown] = React.useState(false);
    const modal = getModal();

    if (!hasModalShown) {
        setTimeout(() => {
            setIsModalOpen(true);
        }, 2000);
        setHasModalShown(true);
    }

    return (
        <PageContainer>
            <Header />
            <Modal
                modal={modal}
                open={isModalOpen}
                onToggle={() => setIsModalOpen(!isModalOpen)}
            />
            {children}
            <Footer />
        </PageContainer>
    );
};

export default Page;

const PageContainer = styled.div`
    max-width: 1200px;
    margin: auto;
`;
