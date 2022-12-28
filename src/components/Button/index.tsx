import React from 'react';
import { ButtonProps } from '../../@types';
import { Component } from './styles';

export function Button({ children, ...props }: ButtonProps) {
  return <Component {...props}>{children}</Component>;
}
