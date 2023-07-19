// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Narrowlink',
  tagline: 'A secure and borderless network Swiss Army Knife',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://narrowlink.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'narrowlink', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        sitemap: {
          changefreq: 'daily',
          priority: 0.0,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          trailingSlash: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/narrowlink/homepage/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }, 
        gtag: {
          trackingID: 'G-C3JMEK1LYG',
          anonymizeIP: true,
        },
      }),
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'This is a pre-released version of the Narrowlink documentation. If you come across any issues or have suggestions for improvements, please feel free to create an issue or pull request (PR) on our GitHub repository.',
        backgroundColor: '#1b6f77',
        textColor: '#ffffff',
        isCloseable: false,
      },
      // metadata: [{ name: 'tag', content: 'cooking' }],
      // Replace with your project's social card
      image: 'img/narrowlink-social-card.jpg',
      navbar: {
        title: 'Narrowlink',
        logo: {
          alt: 'Narrowlink Logo',
          src: 'img/NarrowLink-888.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/narrowlink',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/narrowlink',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/narrowlink',
              },
              {
                label: 'Threads',
                href: 'https://threads.net/narrowlink',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/narrowlink',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
