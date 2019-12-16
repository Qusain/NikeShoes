import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class DrawerScreen extends React.Component {
    state = {
        name: '',
        email: '',
        image: '',
    };
    componentDidMount = () => {
        AsyncStorage.getItem('key', (error, res) => {
            if (res !== null) {
                const data = JSON.parse(res);
                this.setState({name: data.name, email: data.email});
            }
        });
        AsyncStorage.getItem('keyy', (error, res) => {
            if (res !== null) {
                this.setState({image:res});
            }
            else {
                console.warn('fail')
            }
        });
    };


    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View
                    style={{
                    width: '100%',
                    flexDirection: 'column',
                    borderBottomWidth:1,
                        borderColor:'#127CC1'
                }}>
                    <View style={{
                        width: '100%',
                        alignItems: 'flex-start',
                        marginTop:20,
                        marginLeft:20
                    }}>
                        <Image style={{
                            height: 80,
                            width:80,
                            borderRadius:125,
                            borderWidth:1,
                            borderColor:'#127CC1'
                        }}
                        source={{uri:this.state.image}}
                        />


                    </View>
                    <View style={{
                        width: '100%',
                        alignItems: 'flex-start',
                        marginLeft:20,
                        marginTop:10
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight:'bold'
                        }}>
                            {this.state.name}

                        </Text>


                    </View>
                    <View
                        style={{
                        width: '100%',
                        alignItems: 'flex-start',
                        marginTop:10,
                        marginLeft:20,
                            marginBottom:5
                    }}>
                        <Text style={{
                            fontSize: 15,
                        }}>
                            {this.state.email}

                        </Text>


                    </View>

                </View>



            </View>
        );
    }
}
