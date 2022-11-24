import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const colors = {
  primary: "#463F4E",
  secondary: "rgba(23,28,41,0.5)",
  textfields: "#463F4E",
  links: "#463F4E"
}

export default //styles
styles = StyleSheet.create({ //purpleLogin
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

});