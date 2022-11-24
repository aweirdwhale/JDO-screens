import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import stylesA from "../../stylesheets/profil/default.js"

export default class Param extends React.Component {
    render() {
        return (
            <View style={stylesA.container}>
                <Text style={stylesA.text}>Param</Text>
            </View>
        );
    }
}