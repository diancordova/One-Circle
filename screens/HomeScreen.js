import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {RkCard,RkTheme,RkText,RkButton} from 'react-native-ui-kitten'
RkTheme.setType('RkCard', 'story', {
    img: {
      height: 100,
      opacity: 0.7
    },
    header: {
      alignSelf: 'center'
    },
    content:{
      alignSelf:'center'
    }
  }); 
class HomeScreen extends Component {
    render() {
        return (
            <RkCard rkType='story'>
                <Image rkCardImg source={require('../screens/src/image/kamera.png')} />
                <View rkCardHeader>
                    <RkText rkType='header'>Once upon a time</RkText>
                </View>
                <View rkCardContent>
                    <RkText style={{ textAlign: 'center' }}>
                        One morning, when Gregor Samsa woke from happy dreams,
                        he found himself transformed in ...
              </RkText>
                </View>
                <View rkCardFooter>
                    <RkButton rkType='small outline'>Learn More</RkButton>
                    <RkButton rkType='small'>Read later</RkButton>
                </View>
            </RkCard>
            


        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});