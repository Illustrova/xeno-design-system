import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

// @ts-ignore
import logo from './xeno-logo.svg';
const xenoTheme = create({
  base: 'light',
  brandImage: logo,
  brandTitle: 'Xeno Design System',
});

addons.setConfig({
  theme: xenoTheme,
});
