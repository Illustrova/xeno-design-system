import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

const meta: Meta = {
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UiudqZpH7ZEczHxlTceCRW/ds?node-id=85%3A1877',
    },
  },
};

export default meta;

export const Standard: ComponentStory<typeof Button> = args => <Button {...args} />;
Standard.args = { children: 'Button', variant: 'filled', isLoading: false };
