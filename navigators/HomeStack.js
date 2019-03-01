import { createStackNavigator } from "react-navigation";

import Home from '../pages/Home';
import Wait from '../pages/Wait';

const HomeStack = createStackNavigator({
  Wait,
  Home,
}, {
  headerMode: "float",
});

export default HomeStack;