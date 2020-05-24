/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

import { Header } from './header';
import './layout.css';

const Page = ({ children }) => {
    return (
        <PageContainer>
            <Header />
            {children}
        </PageContainer>
    );
};

export default Page;

const PageContainer = styled.div`
    max-width: 1200px;
    margin: auto;
`;
