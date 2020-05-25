/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

import { Header } from './header';
import { Modal } from './modal';
import { getModal } from '../gql/queries/modal';
import './layout.css';

const Page = ({ children }) => {
    const modal = getModal();

    return (
        <PageContainer>
            <Header />
            <Modal modal={modal} />
            {children}
        </PageContainer>
    );
};

export default Page;

const PageContainer = styled.div`
    max-width: 1200px;
    margin: auto;
`;
