export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
};
