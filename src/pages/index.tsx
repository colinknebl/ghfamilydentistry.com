import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Letter } from '../components/_temp/letter';
import { getDoctors } from '../gql/queries/doctors';
import { Section } from '../components/section';

const IndexPage = (props: PageProps<IPageQueryResults>) => {
    const { doctors } = getDoctors();
    return (
        <Page>
            <SEO title="Home" />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={props.data.site.siteMetadata.title}
            >
                <StyledDocList>
                    {doctors.map((doc) => (
                        <li key={doc.id}>{doc.name}</li>
                    ))}
                </StyledDocList>
            </JumbotronSection>
            <Section>
                <Letter />
            </Section>
        </Page>
    );
};

export default IndexPage;

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    site: {
        siteMetadata: {
            title: string;
        };
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
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const StyledDocList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
`;
