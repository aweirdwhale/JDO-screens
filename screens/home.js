import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import styleA from "../stylesheets/login/purple" //first theme

export default class Home extends React.Component {

  state = {
    name: ""
  }

  devComeback = () => {
    this.props.navigation.navigate("Login", { name: this.state.name })
  }

  render() {
    return(
      <View style={styleA.container}>

      </View>
    );
  }
  
}