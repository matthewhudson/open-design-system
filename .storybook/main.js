/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
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
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      const cssRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".css")
      )
      if (cssRule) {
        cssRule.use = [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss" /*, "autoprefixer"*/],
              },
            },
          },
        ]
      }
    }
    return config
  },
}
export default config
