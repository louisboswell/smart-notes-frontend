import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from "vite";

import autoStoryGenerator from "@takuma-ru/auto-story-generator";

const config: StorybookConfig = {

  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        autoStoryGenerator.vite({
          preset: "react",
          imports: ["src/components/**/*.tsx"],
        }),
      ],
    }),
};
export default config;