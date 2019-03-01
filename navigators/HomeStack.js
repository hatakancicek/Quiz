import { createStackNavigator } from "react-navigation";

import Home from '../pages/Home';

const HomeStack = createStackNavigator({
  Home
}, {
  headerMode: "float",
  
});

export default HomeStack;