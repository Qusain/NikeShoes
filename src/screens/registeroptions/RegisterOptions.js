import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export class RegisterOptions extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#F7F9F9',
            }}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:50
                }}>
                    <Image style={{
                        height: 150,
                        width: 200,
                        marginLeft: -35,
                    }}
                           source={require('../../assests/icon.png')}
                    />
                </View>
                <View style={{
                    width: '100%',
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:100,
                }}>
                <TouchableOpacity style={{
                    width: '75%',
                    backgroundColor: '#127CC1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    padding: 12,
                    marginTop: 30,

                }}
                onPress={()=>this.props.navigation.navigate('SignIn')}
                >
                    <Text style={{
                        fontSize: 20,
                        color: '#fff',
                        fontWeight: 'bold',
                    }}>
                        SignIn
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '75%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    padding: 10,
                    borderWidth: 2,
                    borderColor: '#127CC1',
                    marginTop: 15,

                }}
                                  onPress={()=>this.props.navigation.navigate('SignUp')}
                >
                    <Text style={{
                        fontSize: 20,
                        color: '#127CC1',
                        fontWeight: 'bold',
                    }}>
                        SignUp
                    </Text>

                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
