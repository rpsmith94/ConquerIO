module.exports = {
    
    title: 'Leonardo Component Architecture',
    tagline: 'Leonardo Component Architecture',
    url: 'https://rpsmith94.github.io/',
    baseUrl: '/ConquerIO/',
    favicon: 'img/favicon.png',
    organizationName: 'rpsmith94', // Usually your GitHub org/user name.
    projectName: 'ConquerIO', // Usually your repo name.
    trailingSlash: false,
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap',
    ],
    themeConfig: {
        //algolia: {
        //  apiKey: '',
        //  indexName: '',
        //  appId: '',
        //  algoliaOptions: {}, // Optional, if provided by Algolia
        //},
        announcementBar: {
            id: 'support_us',
            content:
              'The page is a work in progress (Home page only)',
            backgroundColor: '#fafbfc',
            textColor: '#091E42',
            isCloseable: false,
          },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
             logo: {
                alt: 'Q',
                src: 'img/nuclear-fission.png',
                href: ' ',
            },
            title: 'Conquer',
           
            items: [
                { to:'#overview-link', label: 'Introduction', position: 'left' },
                { to:'#feature-link', label: 'Features', position: 'left' },
                { to: ' ', label: 'Guides', position: 'left' },
                { to: ' ', label: 'Tooling', position: 'left' },
                { to: ' ', label: 'Community', position: 'left' },
                { to: ' ', label: 'Comparisons', position: 'left' },
                {to: ' ', label: 'Requirements', position: 'left'},             
                {to: ' ', label: 'V1.0.0', position: 'right'},
                {to: ' ', label: 'License', position: 'left'},             
                {
                    href: "https://github.com/",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
                {
                    href: "https://stackoverflow.com/",
                    position: "right",
                    className:"header-conan-link",
                    "aria-label": "GitHub repository",

                }
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Getting Started',
                    items: [{
                            label: 'Create a project',
                            to: 'docs/dashboard/get-started',
                        },
                        {
                            label: 'CMS integrations',
                            to: 'docs/integrations/overview',
                        },
                        {
                            label: 'Static site generators',
                            to: 'docs/cli/get-started',
                        },
                    ],
                },
                {
                    title: 'Developers',
                    items: [{
                            label: 'API',
                            to: 'docs/api/get-started-content',
                        },
                        {
                            label: 'CLI',
                            to: 'docs/cli/get-started',
                        }
                    ],
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            href: 'https://google.com',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://google.com',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://google.com',
                        },
                    ],
                },
            ],
        },
    },
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local"),'docusaurus-plugin-sass'],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                    
                },
                
            },
        ],
    ],
};