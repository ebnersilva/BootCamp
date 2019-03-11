import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

import { colors } from './styles';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
