import { useStaticQuery, graphql } from 'gatsby';

interface Doctor {
    name: string;
    image: {
        asset: {
            url: string;
        };
    };
}

type DoctorsQueryResult = {
    allSanityDoctors: {
        nodes: QueriedDoctor[];
    };
};

export interface QueriedDoctor extends Doctor {
    id: string;
}

export const getDoctors = () => {
    const data = useStaticQuery<DoctorsQueryResult>(graphql`
        {
            allSanityDoctors {
                nodes {
                    id
                    name
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
        }
    `);

    return {
        doctors: data.allSanityDoctors.nodes,
    };
};
