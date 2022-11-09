import { StyleSheet, Dimensions, TextInput } from "react-native";
const {width, height} = Dimensions.get('window')

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
      //height: 50,
      //borderRadius: 13,
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