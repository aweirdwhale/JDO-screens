import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';
import colors from "./theme.js";

import * as NavigationBar from 'expo-navigation-bar';

import chatScreen from "./screens/chatScreen.js";
import Login from "./screens/login.js"
// import Test from "./screens/testmodal.js";


// async function App() {
//   NavigationBar.setBackgroundColorAsync("black");
// }

const AppNavigator = createStackNavigator(
  {
    // Test: Test,
    Login: Login,
    Chat: chatScreen,
  },
  {
    headerMode: "none"
  },
   NavigationBar.setVisibilityAsync("hidden"),
   NavigationBar.setBehaviorAsync('overlay-swipe'),
   NavigationBar.setButtonStyleAsync("light"),

  
);

export default createAppContainer(AppNavigator);