import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Loading from '../pages/Loading';

const AppNavigator = createSwitchNavigator({
  Loading
});

export default createAppContainer(AppNavigator);