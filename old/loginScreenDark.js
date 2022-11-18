import * as React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView  } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
//import styles from '../styles/loginDark.js'
import { SafeAreaView } from 'react-native';

const {width, height} = Dimensions.get('window');

const logo = require('../assets/icon/logoRond.png')


export default class loginScreenDark extends React.Component {
  

  state = {
    name: ""
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name })
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>

              {/*<TextInput style={styles.textInput} placeholder="Nom d'utilisateur pronote" 
                        onChangeText={name => {
                          this.setState({ name })
                        }}
                          value={this.state.name}
              />
              <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Mot de passe" 
                        onChangeText={pwd => {
                          this.setState({ pwd })
                        }}
                          value={this.state.pwd}
              />

        <View style={{alignItems: "flex-end", marginTop: 64, top: 400, left: -25}}>
          <TouchableOpacity style={styles.continue} onPress={this.continue}>
            <Ionicons name="arrow-forward-outline" size={24} color='#FFF' />
          </TouchableOpacity>
                      </View> */}

        <View style={styles.bottomContainer}>
          <View style={styles.firstBottomBox}>
            <Text style={styles.basicText}>Si vous avez oublié vos identifiants, rien de grave, réinitialisez-le directement via Atrium! JDO-Copilot ne stock aucunes données personnelles.</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#371B58',
  },*/
 bottomContainer: {
  flex: 1,
  /*position: 'absolute',
  left: 0, right: 0,
  bottom: 0,
  alignItems: 'center',*/
  justifyContent: 'flex-end',
  /*marginBottom: 5,
  width: width,
  flexDirection: 'column',*/
 },
 firstBottomBox: {
  backgroundColor: '#5B4B8A',
  borderRadius: 7,
  width: width - 15,
  alignItems: 'center',
  textAlignVertical: 'center',
  /*marginHorizontal: 20,
  marginVertical: 10,
  paddingVertical: 5,*/
 },
 basicText: {
  color: 'white',
 },
 /*continue: {
  width: 70,
  height: 70,
  borderRadius: 70 / 2,
  backgroundColor: "#7858A6",
  alignItems: "center",
  justifyContent: "center",
  left: 2,
  top: -12
  },
  textInput: {
    //top: 40,
    marginTop: 32,
    height: 50,
    width: width / 1.5,
    backgroundColor: "#5B4B8A",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    left: -10
  }*/

})