import React from 'react';
import { Link } from 'gatsby';

import Page from '../components/page';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Page>
        <SEO title="Home" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Page>
);

export default IndexPage;
