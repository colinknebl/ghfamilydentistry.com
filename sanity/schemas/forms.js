export default {
    name: 'forms',
    title: 'Forms',
    type: 'document',
    fields: [
        {
            name: 'patientLetter',
            title: 'Patient Letter',
            type: 'file',
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'Forms',
            };
        },
    },
};
