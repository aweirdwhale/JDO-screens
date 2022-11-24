import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons'
import { View } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import styles from "../../stylesheets/Home/default"

import Edt from "../homepages/edt.js"
import As from "../homepages/as.js"
import Map from "../homepages/map.js"

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const TopBar = createMaterialTopTabNavigator();

export default class TopNav extends React.Component {

    state = {
      name: ""
    }
  
    render() {
      return(
    <View style={{ flex: 1, backgroundColor: '#463F4E' }}>
      <NavigationContainer independent={true}>
        <TopBar.Navigator
            screenOptions={({ route }) => ({
              // show the tabBarIndicator
              tabBarIndicatorStyle: {
                backgroundColor: '#C87327',
                height: 3,
                borderRadius: 10,
                width: width / 3,
                //marginLeft: 20,
                //marginRight: 20,
              },

                tabBarShowLabel: false,
                //tabBarIndicator: () => {'#C87327'},
                tabBarStyle: {
                    backgroundColor: "#2D2933",
                    borderTopColor: "#2D2933",
                    borderTopWidth: 1,
                    height: 60,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                
                },
                
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;

                    if (route.name === "EDT") {
                        iconName = focused ? "albums" : "albums-outline";
                          
                    } else if (route.name === "AS") {
                        iconName = focused ? "basketball" : "basketball-outline";
                    } else if (route.name === "PLAN") {
                        iconName = focused ? "map" : "map-outline";
                    }
                    return <Ionicons name={iconName} size={25} colour='#a128' />
                },
                
                
            })}
        >
        
          <TopBar.Screen name="EDT" component={Edt} options={{headerShown: false}} />
          <TopBar.Screen name="AS" component={As} options={{headerShown: false, }} />
          <TopBar.Screen name="PLAN" component={Map} options={{headerShown: false, }} />
        </TopBar.Navigator>
      </NavigationContainer>
    </View>
    
      )
    }
}