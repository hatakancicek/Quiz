import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Loading from '../pages/Loading';
import Error from '../pages/Error';

const AppNavigator = createSwitchNavigator({
  Loading,
  Error
});

export default createAppContainer(AppNavigator);