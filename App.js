import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';

import loginScreenDark from "./screens/loginScreenDark.js";
import loginScreen from "./screens/loginScreen";
import chatScreen from "./screens/chatScreen.js";
//import appIsLaunching from "./screens/appIsLaunching.js"

const AppNavigator = createStackNavigator(
  {
    LoginDark: loginScreenDark,
    Login: loginScreen,
    Chat: chatScreen,
    
    //FirstHome: appIsLaunching
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);