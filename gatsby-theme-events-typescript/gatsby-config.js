module.exports = ({ contentPath = 'data' }) => ({
    plugins: [
        `gatsby-plugin-typescript`,
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: contentPath,
            },
        },
        {
            resolve: 'gatsby-transformer-yaml',
            options: {
                typeName: 'Event',
            },
        },
    ],
});
