import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'LagnCrash',
        siteUrl: 'https://www.yourdomain.tld'
    },
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ['gatsby-plugin-image', 'gatsby-plugin-sitemap', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-plugin-postcss', {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: './src/images/'
        },
        __key: 'images'
    }]
};

export default config;
