import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import React from 'react';

export type ButtonProps = Omit<MuiButtonProps, 'color' | 'variant' | 'startIcon' | 'endIcon'> & {
  /**
   * Set to true to indicate that the button action is still running.
   */
  isLoading?: boolean;
  /**
   * Choose the variant based on the usage of the button:
   *
   * * `filled` for highly visible call-to-action buttons
   * * `outlined` as the standard primary actions
   * * `text` for secondary actions
   * * `alert` for dangerous actions
   * * `iconLeft` for text with an icon on the left
   * * `iconRight` for text with an icon on the right
   */
  variant: 'filled' | 'outlined' | 'text' | 'alert' | 'iconRight' | 'iconLeft';
  icon?: React.ReactNode;
};

const variantMappings: Record<string, Record<string, string>> = {
  filled: {
    color: 'secondary',
    variant: 'contained',
  },
  text: {
    color: 'primary',
    variant: 'text',
  },
  outlined: {
    color: 'primary',
    variant: 'outlined',
  },
  alert: {
    color: 'error',
    variant: 'outlined',
  },
};

export const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ variant, isLoading, children, icon, ...props }, ref) => {
    const variantProps = { ...props, ...variantMappings[variant] };

    return (
      <MuiButton {...variantProps} disabled={variantProps.disabled || isLoading} ref={ref}>
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
