import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {RkButton, RkTheme} from 'react-native-ui-kitten';


class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <RkButton onPress={()=>this.props.navigation.navigate('SignIn')}> Sign In</RkButton>
            <RkButton onPress={()=>this.props.navigation.navigate('SignUp')}> Sign Up</RkButton>
            <RkButton onPress={()=>this.props.navigation.navigate('CobaApi')}> Coba API</RkButton>
            <RkButton onPress={()=>this.props.navigation.navigate('ApiOneCircle')}> Api One Circle</RkButton>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        alignItems: 'center',
        justifyContent: 'center',
    }
});
let accent = '#ed1c4d';

RkTheme.setType('RkButton', 'accent', {
  container: {
    backgroundColor: accent,
    color: 'white'
  }
});