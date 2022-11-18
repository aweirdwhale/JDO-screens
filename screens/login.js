//import modules
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

//import assets
const { width, height } = Dimensions.get('window');
const logo = require('../assets/icon/logoRond.png')


//init bottomPopup
import BottomPopup from '../components/bottomPopup.js'
const popupList = [
  { id: 1, name: 'Task' },
  { id: 2, name: 'Message' },
  { id: 3, name: 'Note' }
]


export default class Login extends React.Component {
  state = {
    name: ""
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name })
  }


  //keyboard listeners
  UNSAFE_componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  UNSAFE_componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  // _keyboardDidShow () {
  //   alert('Keyboard Shown');
  // }

  _keyboardDidHide() {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync('overlay-swipe');
    NavigationBar.setButtonStyleAsync("light");
  }

  render() {

    //checkbox 'se souvenir de moi'
    function CheckBox() {
      const [checked, onChange] = useState(false);

      function onCheckmarkPress() {
        onChange(!checked);
      }

      return (
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={onCheckmarkPress}>
          {checked && <Ionicons style={styles.check} name="checkmark" size={24} color="white" />}
        </Pressable>
      );
    }

    let popupRef = React.createRef();

    const onShowPopup = () => {
      popupRef.show();
    }

    const onClosePopup = () => {
      popupRef.close();
    }

    return (

      <>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={true} style={styles.container} >
        <View style={styles.container}>
          <View style={styles.circle} />

          {/*theme selector*/}
          <View >
            <TouchableWithoutFeedback onPress={onShowPopup}>
              <Ionicons name="color-palette-outline" size={24} color='#FFF' style={styles.themeSelector}/>
            </TouchableWithoutFeedback>
            <BottomPopup 
              title="Demo Popup"
              ref={(target) => popupRef = target}
              onTouchOutside={onClosePopup}
              data={popupList}
            />
          </View>
                    


          <View style={{ marginTop: 64 }}>
            <Image source={logo}
              style={{ width: 100, height: 100, alignSelf: "center" }} />
          </View>




          <View style={{ marginHorizontal: 32 }}>
            <Text style={styles.header}>Connectez-vous !</Text>
            <View style={{
              width: 255, height: 18, backgroundColor: '#371B58', borderRadius: 38, marginTop: 8, alignSelf: "center"
            }} />


            <TextInput style={styles.textInput} placeholder="Nom d'utilisateur pronote"
              //onPressIn={isolateTextInput}
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

            <CheckBox />
            <Text style={styles.checkboxLabel}>Se souvenir de moi</Text>




            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
              <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Ionicons name="arrow-forward-outline" size={24} color='#FFF' />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.bottomContainer}>
            <View style={styles.bottomBox}>
              <Text style={styles.basicText}>Si vous avez oublié vos identifiants, rien de grave, réinitialisez-le directement via Atrium! JDO-Copilot ne stock aucunes données personnelles.</Text>
            </View>
          </View>
        </View>

      </KeyboardAvoidingView>
      </>
    );
  }
}



//styles
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#371B58",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#4C3575",
    position: "absolute",
    left: -181,
    top: -103
  },
  header: {
    fontWeight: "400",
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 32,
  },
  textInput: {
    marginTop: 32,
    height: 50,
    backgroundColor: "#5B4B8A",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    left: -10
  },
  checkboxBase: {
    top: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: '#5B4B8A',
  },
  check: {
    position: 'absolute',
    alignSelf: 'center',
    left: -2,
  },
  checkboxLabel: {
    left: 25,
    color: 'rgba(255, 255, 255, 0.5)'
  },

  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#7858A6",
    alignItems: "center",
    justifyContent: "center",
    left: 2,
    top: -12
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomBox: {
    backgroundColor: '#5B4B8A',
    borderRadius: 7,
    width: width - 15,
    alignItems: 'center',
    textAlignVertical: 'center',
    marginHorizontal: width - (width - 7),
    marginVertical: 10,
    paddingVertical: 5,
  },

  themeSelector: {
    position: 'absolute',
    top: 35,
    right: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  isolateTextInput: {
    marginTop: 15,
    height: 50,
    backgroundColor: "red",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    left: -10
  },

});