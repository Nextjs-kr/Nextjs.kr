// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EXP 스터디",
  tagline: "EXP 짱",
  favicon: "img/exp_logo.png",

  // Set the production url of your site here
  url: "https://nano-lee.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nano-lee", // Usually your GitHub org/user name.
  projectName: "nano-nextjs-study", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/exp_logo.png",
      navbar: {
        title: "EXP 스터디",
        logo: {
          alt: "My Site Logo",
          src: "img/exp_logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "nextJsSidebar",
            position: "left",
            label: "Next.js",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nano-lee/exp-nextjs-study",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      // 	style: "dark",
      // 	links: [
      // 		{
      // 			title: "Docs",
      // 			items: [
      // 				{
      // 					label: "Tutorial",
      // 					to: "/docs/intro",
      // 				},
      // 			],
      // 		},
      // 		{
      // 			title: "Community",
      // 			items: [
      // 				{
      // 					label: "Stack Overflow",
      // 					href: "https://stackoverflow.com/questions/tagged/docusaurus",
      // 				},
      // 				{
      // 					label: "Discord",
      // 					href: "https://discordapp.com/invite/docusaurus",
      // 				},
      // 				{
      // 					label: "Twitter",
      // 					href: "https://twitter.com/docusaurus",
      // 				},
      // 			],
      // 		},
      // 		{
      // 			title: "More",
      // 			items: [
      // 				{
      // 					label: "Blog",
      // 					to: "/blog",
      // 				},
      // 				{
      // 					label: "GitHub",
      // 					href: "https://github.com/facebook/docusaurus",
      // 				},
      // 			],
      // 		},
      // 	],
      // 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
