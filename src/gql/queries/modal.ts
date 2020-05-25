import { useStaticQuery, graphql } from 'gatsby';
import { Content, RawBlock } from '../../models/content/Content';

interface _Modal {
    name: string;
    title: string;
    publishedAt: string;
    _rawContent: RawBlock[];
}

type LinkQueryResult = {
    sanityModal: QueriedModal;
};

export interface Modal extends Omit<_Modal, '_rawContent'> {
    content: Content;
}

interface QueriedModal extends _Modal {
    id: string;
}

export const getModal = () => {
    const { sanityModal } = useStaticQuery<LinkQueryResult>(graphql`
        {
            sanityModal {
                id
                title
                publishedAt
                _rawContent
            }
        }
    `);

    return {
        id: sanityModal.id,
        title: sanityModal.title,
        publishedAt: sanityModal.publishedAt,
        name: sanityModal.name,
        content: new Content(sanityModal._rawContent),
    };
};
