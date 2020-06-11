export default {
    name: 'staffPage',
    title: 'Staff Page',
    type: 'document',
    fields: [
        {
            title: 'Links',
            name: 'links',
            type: 'array',
            of: [{ type: 'link' }],
        },
        {
            title: 'Disclaimer',
            name: 'disclaimer',
            type: 'content',
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'Staff Page',
            };
        },
    },
};
