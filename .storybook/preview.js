/** @type { import('@storybook/react').Preview } */
const preview = {
  preview: {
    styles: {
      ":root": {
        "--tree-node-background-hover": "rgba(15, 19, 26, 0.07)",
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
