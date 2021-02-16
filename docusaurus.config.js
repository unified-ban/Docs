module.exports = {
  title: 'Documentation',
  tagline: 'for the unified/ban project.',
  url: 'https://docs.unifiedban.solutions',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Prometheus Studio', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Documentation unified/ban',
        src: 'img/unifiedban_brand.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://unifiedban.solutions/Faq',
          label: 'FAQ',
          position: 'right',
        },
	      {
          href: 'https://t.me/unifiedban_news',
          label: 'News',
          position: 'right',
        },
	      {
          href: 'https://dash.unifiedban.solutions',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/prometheus_studio/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/mdf8RQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/unifiedban',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'First Setup',
              to: 'docs/setup/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              href: 'https://t.me/unifiedban_news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/unified-ban',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} unified/ban - A project by <a href="//mirko.pm">mirko.pm</a> / <a href="//twitch.tv/prometheus_studio">Prometheus Studio</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/unified-ban/Docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
