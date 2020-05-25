import { useStaticQuery, graphql } from 'gatsby';

interface Doctor {
    name: string;
}

type DoctorsQueryResult = {
    allDoctorsJson: {
        nodes: QueriedDoctor[];
    };
};

export interface QueriedDoctor extends Doctor {
    id: string;
}

export const getModal = () => {
    const data = useStaticQuery<DoctorsQueryResult>(graphql`
        {
            allDoctorsJson {
                nodes {
                    id
                    name
                }
            }
        }
    `);

    return {
        doctors: data.allDoctorsJson.nodes,
    };
};
