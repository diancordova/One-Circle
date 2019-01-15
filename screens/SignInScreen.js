import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,Dimensions,
    Image, TextInput, TouchableOpacity
} from "react-native";

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;


class SignInScreen extends Component {

    signIn = async()=>{
        await AsyncStorage.setItem('UserToken','varun')
        
        this.props.navigation.navigate('App')
    }
    render() {

        signIn = async()=>{
            await AsyncStorage.setItem('userToken','varun')

            this.props.navigation.navigate('App')
        }
        return (
            <View style={styles.container}>
        
            <View style={[styles.logoContainer, styles.box, styles.box1]}>
              <Image style={styles.logo}
                source={require('../screens/src/image/logo.png')} />
  
  
            
          </View>
          <TextInput 
              placeholder="Username or Email"
              placeholderTextColor="rgba(0,0,0,0.7)"
               style={styles.input} />
              <TextInput 
              placeholder="Password"
              placeholderTextColor="rgba(0,0,0,0.7)"
              style={styles.input} />
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          <View style={[styles.box, styles.box2]}></View>
          
        </View>
  
  
      );
    }
  }
  
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
      },
      logoContainer: {
        padding: 40,
        alignItems: 'center',
        flexGrow: 5,
        flexDirection:'row',
        flexDirection:'column',
        justifyContent: 'space-between'
      },
      logo: {
        
        width: 300,
        height: 150,
      },
      box: {
        flex:6
      },
      box1: {
        flex:1,
        backgroundColor: '#225294'
      },
      box2: {
        flex: 12,
        backgroundColor: '#FFFFFF'
      },
      input: {
        height: 40,
        backgroundColor: 'rgba(102, 179, 255,0.2)',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
    buttonContainer:{
        padding: 20,
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        
        fontWeight: '700'
    }
});