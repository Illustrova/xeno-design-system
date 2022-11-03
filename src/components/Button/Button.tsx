import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import React from 'react';

export type ButtonProps = Pick<MuiButtonProps, 'variant' | 'children' | 'ref' | 'disabled'>;

export const Button: React.FC<ButtonProps> = React.forwardRef(({ variant = 'contained', disabled, children }, ref) => {
  return (
    <MuiButton disabled={disabled} ref={ref} size="large" variant={variant}>
      {children}
    </MuiButton>
  );
});

Button.displayName = 'Button';
