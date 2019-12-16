import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export class SignIn extends React.Component {
    state = {
        item: '+00',
        modelOneVisible: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        image: '',
        modelTwoVisible: false,
    };
    countrycodes = [
        {
            img: require('../../assests/afghanistan.png'),
            name: 'Afghanistan',
            code: '+93',
        },
        {
            img: require('../../assests/china.png'),
            name: 'China',
            code: '+86',
        },
        {
            img: require('../../assests/india.png'),
            name: 'India',
            code: '+91',
        },
        {
            img: require('../../assests/pakistan.png'),
            name: 'Pakistan',
            code: '+92',
        },
        {
            img: require('../../assests/united-arab-emirates.png'),
            name: 'UAE',
            code: '+971',
        },
        {
            img: require('../../assests/united-kingdom.png'),
            name: 'Uk',
            code: '+44',
        },

    ];
    componentDidMount = () => {
        AsyncStorage.getItem('key', (error, res) => {
            if (res !== null) {
                const data = JSON.parse(res);
                this.setState({
                    item: data.code,
                    password: data.password,
                    image: data.image,
                    phone: data.phone,
                });
            }
        });

    };

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                {/*TopView*/}
                <View style={{
                    width: '100%',
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#127CC1',
                }}>
                    <Image style={{
                        height: 100,
                        width: 130,
                        marginTop: -20,
                    }}
                           source={require('../../assests/nike.png')}
                    />
                </View>
                {/*InputTextView*/}
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: -70,
                    }}>
                    <View style={{
                        width: '80%',
                        backgroundColor: '#F7F9F9',
                        alignItems: 'center',
                        borderRadius: 13,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 3,
                        borderColor: '#e8ebeb',
                    }}>
                        {/*PhoneField*/}
                        <View
                            style={{
                                width: '80%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#127CC1',
                                borderRadius: 15,
                                borderBottomWidth: 2,
                                marginTop: 20,
                            }}>
                            <View style={{
                                width: '15%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Icon
                                    name={'ios-contact'}
                                    size={20}
                                    color={'#127CC1'}/>
                            </View>
                            <TouchableOpacity style={{
                                width: '15%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                                              onPress={() => this.setState({modelOneVisible: true})}
                            >

                                <Text style={{
                                    fontSize: 15,
                                    color: '#000',
                                }}>
                                    {this.state.item}

                                </Text>

                            </TouchableOpacity>
                            <View style={{
                                width: '70%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <TextInput style={{
                                    width: '100%',
                                }}
                                           placeholder={'Enter Phone Number'}
                                           keyboardType={'numeric'}
                                           onChangeText={(phone) => this.setState({phone})}
                                           value={this.state.phone}
                                />
                            </View>
                        </View>
                        {/*EmailField*/}
                        <View
                            style={{
                                width: '80%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#127CC1',
                                borderRadius: 15,
                                borderBottomWidth: 2,
                                marginTop: 20,
                                marginBottom: 30,
                            }}>
                            <View style={{
                                width: '20%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Icon
                                    name={'ios-lock'}
                                    size={20}
                                    color={'#127CC1'}/>
                            </View>
                            <View style={{
                                width: '80%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <TextInput style={{
                                    width: '100%',
                                }}
                                           placeholder={'Enter Password'}
                                           secureTextEntry={true}
                                           value={this.state.password}
                                           onChangeText={(password)=>this.setState({password})}
                                />
                            </View>
                        </View>
                    </View>


                </View>
                {/*ForgetView*/}
                <View
                    style={{
                        width: '100%',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginLeft: -35,
                    }}>
                    <TouchableOpacity onPress={()=> this.setState({modelTwoVisible:true})}>
                    <Text style={{
                        fontSize: 15,
                        color: '#127CC1',
                        textDecorationLine: 'underline',
                    }}>
                        Forgot Password?
                    </Text>
                    </TouchableOpacity>
                </View>
                {/*ButtonView*/}
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity style={{
                        width: '60%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#127CC1',
                        borderRadius: 12,
                        padding: 11,
                        marginTop: 50,
                    }}
                    onPress={()=>this.props.navigation.navigate('UploadImage')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: '#fff',
                            fontWeight: 'bold',
                        }}>
                            Sign In

                        </Text>
                    </TouchableOpacity>

                </View>
                {/*CreateAccountView*/}
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop: 90,
                    }}>
                    <View style={{
                        width: '70%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#127CC1',
                        }}>
                            Create an Account?
                        </Text>
                    </View>

                    <View style={{
                        width: '30%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginLeft: -30,
                    }}>
                        <TouchableOpacity style={{
                            width: '90%',
                            borderColor: '#127CC1',
                            borderWidth: 2,
                            borderBottomWidth: 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 12,
                            borderRadius: 10,
                        }}
                                          onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={{
                                fontSize: 15,
                                color: '#127CC1',
                                fontWeight: 'bold',
                            }}>
                                SignUp

                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/*ModelOne*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modelOneVisible}
                    onRequestClose={() => this.setState({modelOneVisible: false})}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: '70%',
                        }}>
                            <FlatList
                                data={this.countrycodes}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        onPress={() => this.setState({
                                            item: item.code,
                                            image: item.img,
                                            modelOneVisible: false,
                                        })}>

                                        <View style={{
                                            width: '100%',
                                            backgroundColor: '#127CC1',
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                        }}>
                                            {/*ImageView*/}
                                            <View style={{
                                                width: '30%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Image style={{
                                                    height: 60,
                                                    width: 60,
                                                }}
                                                       source={item.img}
                                                />

                                            </View>
                                            {/*nameView*/}
                                            <View style={{
                                                width: '35%',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                            }}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    color: '#000',
                                                }}>
                                                    {item.name}

                                                </Text>

                                            </View>
                                            {/*codeView*/}
                                            <View style={{
                                                width: '35%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    color: '#000',
                                                }}>
                                                    {item.code}

                                                </Text>

                                            </View>

                                        </View>
                                    </TouchableOpacity>

                                )}

                            />
                        </View>
                    </View>
                </Modal>
                {/*ModelTwo*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modelTwoVisible}
                    onRequestClose={() => this.setState({modelTwoVisible: false})}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: '70%',
                            backgroundColor: '#127CC1',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:10
                        }}>
                            {/*TextView*/}
                            <View style={{
                                width: '90%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop:10
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#fff',
                                }}>
                                    Please Enter Email and send it,we will send a link for recovery of password

                                </Text>

                            </View>
                            {/*EmailFieldView*/}
                            <View
                                style={{
                                    width: '90%',
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    backgroundColor:'#fff',
                                    borderRadius: 15,
                                    marginTop: 20,
                                }}>
                                <View style={{
                                    width: '20%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Icon
                                        name={'ios-mail'}
                                        size={20}
                                        color={'#127CC1'}/>
                                </View>
                                <View style={{
                                    width: '80%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <TextInput style={{
                                        width: '100%',
                                    }}
                                               placeholder={'Enter Email'}
                                               onChangeText={(email) => this.setState({email})}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: '80%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop:10,
                                    borderRadius:12,
                                    padding:10,
                                    borderWidth:1,
                                    backgroundColor:'#fff',
                                    marginBottom:10,

                                }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color:'#127CC1'
                                }}>
                                    Send

                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>

            </View>
        );
    }
}
