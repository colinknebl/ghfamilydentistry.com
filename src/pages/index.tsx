import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { OpenModal } from '../components/open-modal';
import { JumbotronSection } from '../components/jumbotron-section';
import { Letter } from '../components/letter';

const IndexPage = (props: PageProps<IPageQueryResults>) => {
    return (
        <Page>
            <SEO title="Home" />
            <OpenModal text="VIEW COVID-19 NOTICE!" />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
            >
                <StyledDocList>
                    {props.data.allDoctorsJson.nodes.map((doc) => (
                        <li key={doc.id}>{doc.name}</li>
                    ))}
                </StyledDocList>
            </JumbotronSection>
            <Letter />
        </Page>
    );
};

export default IndexPage;

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: {
                aspectRatio: number;
                base64: string;
                sizes: string;
                src: string;
                srcSet: string;
            };
        };
    };
    allDoctorsJson: {
        nodes: Array<{ id: string; name: string }>;
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "chair.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allDoctorsJson {
            nodes {
                id
                name
            }
        }
    }
`;

const StyledDocList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1.4;
`;
