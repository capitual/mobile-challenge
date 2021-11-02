import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';

import colors from '../styles/colors';

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);

export default Routes;
