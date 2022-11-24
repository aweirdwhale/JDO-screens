import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const colors = {
  primary: "#2D2933",
  secondary: "rgba(23,28,41,0.5)",
  textfields: "#463F4E",
  links: "#463F4E"
}

export default //styles
stylesA = StyleSheet.create({ //purpleLogin
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: colors.secondary,
    position: "absolute",
    left: -181,
    top: -103
  },
  header: {
    fontWeight: "400",
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 32,
    alignSelf: "center",
  },
  textInput: {
    marginTop: 32,
    height: 50,
    backgroundColor: colors.textfields,
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#C87327",
    fontWeight: "600",
  },
  basicText: {
    color: "rgba(255,255,255,0.5)",
  },
  checkboxBase: {
    top: 5,
    left: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    borderColor: '#C87327',
    backgroundColor: '',
  },
  check: {
    position: 'absolute',
    alignSelf: 'center',
    left: -2,
    top: -7,
    color: '#C87327'
  },
  checkboxLabel: {
    left: 40,
    top: -15,
    color: 'rgb(255, 255, 255)'
  },

  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: colors.links,
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
    backgroundColor: '#342F3A',
    borderRadius: 15,
    width: width - 15,
    alignItems: 'center',
    textAlignVertical: 'center',
    marginHorizontal: width - (width - 7),
    marginVertical: 7,
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
  separator: {
    width: 255,
    height: 18,
    backgroundColor: colors.primary,
    borderRadius: 38,
    marginTop: 8,
    alignSelf: "center"
  }

});