import React from 'react';
import { TextProps } from '../../@types';
import { Component } from './styles';

export function Text({ children, ...props }: TextProps) {
  return <Component {...props}>{children}</Component>;
}
