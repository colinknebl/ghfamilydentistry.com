import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { getDoctors } from '../gql/queries/doctors';
import { Section } from '../components/section';

const TITLE = 'Services';

const ServicesPage = (props: PageProps<IPageQueryResults>) => {
    const { doctors } = getDoctors();
    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section title={TITLE}>
                <ul>
                    {props.data.allSanityServices.nodes.map((service, i) => (
                        <li key={i}>{service.name}</li>
                    ))}
                </ul>
            </Section>
        </Page>
    );
};

export default ServicesPage;

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
    allSanityServices: {
        nodes: Array<{ name: string }>;
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "dental-tools.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allSanityServices {
            nodes {
                name
            }
        }
    }
`;
