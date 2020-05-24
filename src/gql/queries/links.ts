import { useStaticQuery, graphql } from 'gatsby';

interface Link {
    name: string;
    to: string;
    enabled: boolean;
}

type LinkQueryResult = {
    allSiteNavigationJson: {
        nodes: QueriedLink[];
    };
};

export interface QueriedLink extends Link {
    id: string;
}

export const getLinks = () => {
    const data = useStaticQuery<LinkQueryResult>(graphql`
        {
            allSiteNavigationJson {
                nodes {
                    id
                    to
                    name
                    enabled
                }
            }
        }
    `);

    return (
        data.allSiteNavigationJson.nodes.filter((link) => link.enabled) || []
    );
};
