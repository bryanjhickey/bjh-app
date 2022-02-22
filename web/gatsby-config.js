/* eslint-disable @typescript-eslint/no-var-requires */
// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});
// And then you can use the config in gatsby-config.js
const isProd = process.env.NODE_ENV === 'production';

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  flags: {
    PARALLEL_SOURCING: process.env.PARALLEL_SOURCING || false,
    PARALLEL_QUERY_RUNNING: process.env.PARALLEL_QUERY_RUNNING || false,
    PRESERVE_FILE_DOWNLOAD_CACHE:
      process.env.PRESERVE_FILE_DOWNLOAD_CACHE || false,
    FAST_DEV: process.env.FAST_DEV || false,
    DETECT_NODE_MUTATIONS: process.env.DETECT_NODE_MUTATIONS || false,
  },
  plugins: [
    'gatsby-plugin-remove-console',
    'gatsby-plugin-postcss',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_API_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bryan J. Hickey | Design, Web Development & Marketing freelancer working in Melbourne, Australia',
        short_name: 'Bryan J. Hickey',
        start_url: '/',
        background_color: '#1f2937',
        theme_color: '#32a852',
        display: 'standalone',
        icon: './src/assets/images/logo/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
  ],
};
