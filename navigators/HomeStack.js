import { createStackNavigator } from "react-navigation";

import Home from '../pages/Home';
import Wait from '../pages/Wait';
import Profile from '../pages/Profile';
import Question from '../pages/Question';


const HomeStack = createStackNavigator({
  Question,
  Profile,
  Home,
  Wait,
}, {
  headerMode: "float",
});

export default HomeStack;