import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';

import { provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import themeReducer from "./redux/themeReducer.js";

import chatScreen from "./screens/chatScreen.js";
import Login from "./screens/login.js"


const AppNavigator = createStackNavigator(
  {
    //LoginDark: loginScreenDark,
    Login: Login,
    Chat: chatScreen,
    
    //FirstHome: appIsLaunching
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);