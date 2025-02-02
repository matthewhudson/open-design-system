/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  staticDirs: ["../public"],
  stories: [
    "../docs/*.@(md|mdx)",
    "../docs/**/*.@(md|mdx)",
    //"../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/design-tokens/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     define: {
  //       "process.env.UNSAFE_DISABLE_ELEMENT_ERRORS": false,
  //     },
  //   })
  // },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
