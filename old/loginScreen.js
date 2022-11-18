import React from "react"
import { CheckBox, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

const logo = require('../assets/icon/logoRond.png')

export default class loginScreen extends React.Component {
  

  state = {
    name: ""
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name })
  }

  render() {
    return(
      <View style={styles.container}>
          <View style={styles.circle} />
          <View style={{ marginTop: 64 }}>
            <Image source={logo}
                   style={{ width: 100, height: 100, alignSelf: "center" }} />
          </View>
          <View style={{ marginHorizontal: 32 }}>
            <Text style={styles.header}>Connectez-vous !</Text>
            <View style={{
              width: 255, height: 18, backgroundColor: '#ABEDD8', borderRadius: 38, marginTop: 8, alignSelf: "center"
            }} />
              <TextInput style={styles.inputName} placeholder="Nom d'utilisateur pronote" 
                        onChangeText={name => {
                          this.setState({ name })
                        }}
                          value={this.state.name}
              />
              <TextInput secureTextEntry={true} style={styles.inputPwd} placeholder="Mot de passe" 
                        onChangeText={pwd => {
                          this.setState({ pwd })
                        }}
                          value={this.state.pwd}
              />
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />

            
            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
              <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Ionicons name="arrow-forward-outline" size={24} color='#FFF' />
              </TouchableOpacity>
            </View>
          </View>


          <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <View style={{ backgroundColor: '#ABEDD8', height: 100, width: windowWidth, borderTopLeftRadius: 75 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 32, marginTop: 32, alignItems: 'center' }}>
                <View style={styles.footer}>
                <Text style={styles.footerText}>Si vous avez oublié vos identifiants, rien de grave.
                      Vous devez aller voir l'intendant.
                      Nous ne pouvons rien faire pour vous. JDO-copilot ne conserve aucune données personnelles.</Text>

                </View>
              </View>
            </View>
          </View>
      </View>



          /*<View style={styles.footer}>
            <Text style={styles.footerText}>
              Si vous avez oublié vos identifiants, rien de grave.
              Vous devez aller voir l'intendant.
              Nous ne pouvons rien faire pour vous. JDO-copilot ne conserve aucune données personnelles.
            </Text>
          </View>
      </View>*/
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ABEDD8",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#46CDCF",
    position: "absolute",
    left: -181,
    top: -103
  },
  header: {
    position: "absolute",
    fontWeight: "400",
    fontSize: 30,
    color: "#48466D",
    marginTop: 32,
    
    //center the text
    textAlign: "center",
    alignSelf: "center",

    //fontFamily: "MontserratRegular"
  },
  inputText: {
    marginTop: 32,
    height: 50,
    backgroundColor: "#93D4D4",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#48466D",
    fontWeight: "600",
    left: -10
  },
  checkbox: {

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

  footer: {

    //width: 330,
    height: 50,
    borderRadius: 13,
    //backgroundColor: "#93D4D4",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    //bottom: 0,
    //left: windowWidth / 2,
  },

  footerText: {
    color: '#000',
    fontSize: 10,
    fontWeight: "400",
    left: 2
  }
});