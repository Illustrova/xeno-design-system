import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

const meta: Meta = {
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    variant: {
      control: 'select',
    },
    children: {
      name: 'Button text',
      control: 'text',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UiudqZpH7ZEczHxlTceCRW/ds?node-id=85%3A1877',
    },
  },
};

export default meta;

export const Playground: ComponentStory<typeof Button> = args => <Button {...args} />;
Playground.args = { children: 'Button', variant: 'contained', disabled: false };

export const Variants: ComponentStory<typeof Button> = args => (
  <>
    {(['contained', 'outlined', 'text'] as ButtonProps['variant'][]).map(variant => (
      <Button key={variant} variant={variant} {...args} />
    ))}
  </>
);
Variants.args = { children: 'Button', disabled: false };
