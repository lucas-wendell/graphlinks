import React from 'react';
/**
 * @summary Function to create JSX component in storybook
 * @description Only use this funciton on storybook, this function must be used when you need consume a provider with storybook decorators
 */
export const createReactComponent = (Story: any) => React.createElement(Story);
