import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export default class chatScreen extends React.Component {
  

  state = {
    name: ""
  }

  devComeback = () => {
    this.props.navigation.navigate("LoginScreenDark", { name: this.state.name })
  }

  render() {
    return(
      <View style={styles.container}>

<View style={{ alignItems: "flex-end", marginTop: 64 }}>
        <TouchableOpacity style={styles.comeback} onPress={this.devComeback}>
              <Ionicons name="arrow-forward-outline" size={200} color='#FFF' />
        </TouchableOpacity>
</View>



      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ABEDD8",
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#46CDCF",
    alignItems: "center",
    justifyContent: "center",
    left: 2,
    top: -12
  },
});