import * as React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

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
      <View style={styles.container}>
          <View style={styles.circle} />
          <View style={{ marginTop: 64 }}>
            <Image source={logo}
                   style={{ width: 100, height: 100, alignSelf: "center" }} />
          </View>
          <View style={{ marginHorizontal: 32 }}>
            <Text style={styles.header}>Connectez-vous !</Text>
            <View style={{
              width: 255, height: 18, backgroundColor: '#371B58', borderRadius: 38, marginTop: 8, alignSelf: "center"
            }} />
              <TextInput style={styles.inputName} placeholder="Nom d'utilisateur pronote" placeholderTextColor="#7858A6" 
                        onChangeText={name => {
                          this.setState({ name })
                        }}
                          value={this.state.name}
              />
              <TextInput secureTextEntry={true} style={styles.inputPwd} placeholder="Mot de passe" placeholderTextColor="#7858A6" 
                        onChangeText={pwd => {
                          this.setState({ pwd })
                        }}
                          value={this.state.pwd}
              />

            
            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
              <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Ionicons name="arrow-forward-outline" size={24} color='#FFF' />
              </TouchableOpacity>
            </View>
          </View>


          <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <View style={{ backgroundColor: '#371B58', height: 100, width: windowWidth, borderTopLeftRadius: 75 }}>
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
    backgroundColor: "#371B58",
  },
  basicTxt: {
    color: '#FFFFFF'
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

    //fontFamily: "MontserratRegular"
  },
  inputName: {
    marginTop: 32,
    height: 50,
    backgroundColor: "#5B4B8A",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    
    fontWeight: "600",
    left: -10
  },
  inputPwd: {
    marginTop: 32,
    height: 50,
    backgroundColor: "#5B4B8A",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    left: -10
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

  footer: {

    //width: 330,
    height: 50,
    borderRadius: 13,
    //backgroundColor: "#5B4B8A",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    //bottom: 0,
    //left: windowWidth / 2,
  },

  footerText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: "400",
    left: 2
  }
});