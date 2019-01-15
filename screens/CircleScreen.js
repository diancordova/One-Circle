import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {RkAvoidKeyboard,RkTextInput} from 'react-native-ui-kitten'


class CircleScreen extends Component {
    render() {
        return (
            <RkAvoidKeyboard>
            <RkTextInput/>
          </RkAvoidKeyboard>
        );
    }
}
export default CircleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});