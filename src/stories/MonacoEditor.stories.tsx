// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MonacoEditor } from '../components/monaco-editor';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Monaco Editor',
  component: MonacoEditor,
} as ComponentMeta<typeof MonacoEditor>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof MonacoEditor> = (args) => <MonacoEditor {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*π The args you need here will depend on your component */
};
