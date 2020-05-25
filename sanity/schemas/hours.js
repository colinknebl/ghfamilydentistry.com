export default {
    name: 'hours',
    title: 'Hours',
    type: 'document',
    fields: [
        {
            name: 'monAndWedHours',
            title: 'Monday & Wednesday',
            type: 'document',
            fields: [
                {
                    title: 'Office Opens',
                    name: 'officeOpen',
                    type: 'string',
                },
                {
                    title: 'Lunch Starts',
                    name: 'lunchStart',
                    type: 'string',
                },
                {
                    title: 'Lunch Ends',
                    name: 'lunchEnds',
                    type: 'string',
                },
                {
                    title: 'Office Closes',
                    name: 'officeClose',
                    type: 'string',
                },
            ],
        },
        {
            name: 'tueAndThurHours',
            title: 'Tuesday & Thursday',
            type: 'document',
            fields: [
                {
                    title: 'Office Opens',
                    name: 'officeOpen',
                    type: 'string',
                },
                {
                    title: 'Lunch Starts',
                    name: 'lunchStart',
                    type: 'string',
                },
                {
                    title: 'Lunch Ends',
                    name: 'lunchEnds',
                    type: 'string',
                },
                {
                    title: 'Office Closes',
                    name: 'officeClose',
                    type: 'string',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: '',
        },
        prepare() {
            return {
                title: 'Office Hours',
            };
        },
    },
};
