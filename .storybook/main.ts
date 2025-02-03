import type { StorybookConfig } from "@storybook/nextjs"

import path from "node:path"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  staticDirs: [path.join(process.cwd(), ".storybook/public")],

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
    //"@storybook/addon-mdx-gfm",
  ],

  core: {
    disableTelemetry: true,
    //builder: "@storybook/builder-vite",
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
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

  // docs: {
  //   autodocs: true
  // }
}

export default config
