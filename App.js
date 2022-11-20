import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';


import * as NavigationBar from 'expo-navigation-bar';

import Login from "./screens/login.js"
import Home from "./screens/home.js"
// import Test from "./screens/testmodal.js";


const AppNavigator = createStackNavigator(
  {
    // Test: Test,
    Login: Login,
    Home: Home,
  },
  {
    headerMode: "none"
  },
   NavigationBar.setVisibilityAsync("hidden"),
   NavigationBar.setBehaviorAsync('overlay-swipe'),
   NavigationBar.setButtonStyleAsync("light"),
  );

export default createAppContainer(AppNavigator);