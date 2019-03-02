import { createStackNavigator } from "react-navigation";

import Home from '../pages/Home';
import Wait from '../pages/Wait';
import Profile from '../pages/Profile';


const HomeStack = createStackNavigator({
  Profile,
  Wait,
  Home,
}, {
  headerMode: "float",
});

export default HomeStack;