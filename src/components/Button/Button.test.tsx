import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

import * as stories from './Button.stories';

const { Playground: Button } = composeStories(stories);

describe('The Button', () => {
  it('render without crash', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
