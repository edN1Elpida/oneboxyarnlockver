// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Onebox Documentation",
  tagline: "by Onebox Documentation",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: "img/download.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion:false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png"
        },
        items: [
          // {
          //   to: "/docs/category/user-guide",
          //   label: "User Guide",
          //   position: "left"
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   to: "/api/authentication/authenticationtoken",
          //   label: "API",
          //   position: "left"
          // }
          {
            type: "docSidebar", // docSidebar
            position: "left",
            sidebarId: "userguide", // foldername
            label: "User Guide" // navbar title
          },
          {
            type: "docSidebar", // docSidebar
            position: "left",
            sidebarId: "api", // foldername
            label: "API" // navbar title
          },
          {
            type: "docsVersionDropdown", 
            position: "right",
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Onebox, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
