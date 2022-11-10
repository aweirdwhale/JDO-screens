import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';
import colors from "./theme.js";

import chatScreen from "./screens/chatScreen.js";
import Login from "./screens/login.js"

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Chat: chatScreen,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);