import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export class Splash extends React.Component {
    componentDidMount=()=>{
        setTimeout(()=>{
            this.props.navigation.navigate('OnBoardScreen');
        },2000)

}


    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#127CC1',
            }}>
                <Image style={{
                    height: 100,
                    width: 150,
                }}
                       source={require('../../assests/nike.png')}
                />

            </View>
        );
    }
}
