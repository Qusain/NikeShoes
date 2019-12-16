import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

export class UploadImage extends React.Component {
    state = {
        img: '',
    };

    show = () => {
        const options = {
            title: 'Select Options',
            storageOptions: {
                path: 'Raja',
                skipBackup: true,
            },

        };
        ImagePicker.showImagePicker(options, (res) => {
            if (res.error) {
                console.log('something went wrong');
            } else if (res.didCancel) {
                console.log('user press cancel', res.didCancel);
            } else if (res.customButton) {
                console.log('user Press Custom Button', res.customButton);
            } else {
                const source = res.uri;
                this.setState({img: source},()=>{
                    AsyncStorage.setItem('keyy',this.state.img)
                });
            }

        });
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity onPress={() => this.show()}>

                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 125,
                    }}

                           source={require('../../assests/camera.png')}


                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.show()}>

                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 125,
                        marginTop: -150,
                    }}

                           source={{uri: this.state.img}}
                    />
                </TouchableOpacity>

                <Text style={{
                    fontSize: 20,
                    color: '#127CC1',
                    fontWeight: 'bold',
                    marginTop: 25,
                }}>
                    Upload Your Image
                </Text>
                <View style={{
                    width: '90%',
                    flexDirection: 'row',
                    marginTop:80
                }}>
                    <View style={{
                        width: '50%',
                        alignItems: 'flex-start',
                    }}>
                        <TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            fontWeight:'bold',
                            color:'#127CC1',
                            textDecorationLine:'underline'
                        }}
                              onPress={()=>this.props.navigation.navigate('Home')}
                        >
                            Skip

                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '50%',
                        alignItems: 'flex-end',
                    }}>
                        <TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            fontWeight:'bold',
                            color:'#127CC1',
                            textDecorationLine:'underline'
                        }}
                        onPress={()=>this.props.navigation.navigate('Home')}
                        >
                            Next

                        </Text>
                        </TouchableOpacity>
                    </View>


                </View>


            </View>
        );
    }
}
