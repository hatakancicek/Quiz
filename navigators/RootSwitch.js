import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeStack from './HomeStack';

import Loading from '../pages/Loading';
import Error from '../pages/Error';

const AppNavigator = createSwitchNavigator({
  Loading,
  HomeStack,
  Error
});

export default createAppContainer(AppNavigator);