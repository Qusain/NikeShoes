/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export class SignUp extends React.Component {
  state = {
    item: '+00',
    modelOneVisible: false,
    name: '',
    email: '',
    password: '',
    phone: '',
    image: '',
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
  storedata = () => {
    const obj = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      code: this.state.item,
      password: this.state.password,
      image: this.state.image,
    };
    AsyncStorage.setItem('key', JSON.stringify(obj));
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/*TopView*/}
        <View
          style={{
            width: '100%',
            height: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#127CC1',
          }}>
          <Image
            style={{
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
          <View
            style={{
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
            {/*NameField*/}
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#127CC1',
                borderRadius: 15,
                borderBottomWidth: 2,
                marginTop: 40,
              }}>
              <View
                style={{
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={'ios-person'} size={20} color={'#127CC1'} />
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    width: '100%',
                  }}
                  placeholder={'Enter Name'}
                  onChangeText={name => this.setState({name})}
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
              }}>
              <View
                style={{
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={'ios-mail'} size={20} color={'#127CC1'} />
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    width: '100%',
                  }}
                  placeholder={'Enter Email'}
                  onChangeText={email => this.setState({email})}
                  keyboardType={'email-address'}
                />
              </View>
            </View>
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
              <View
                style={{
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={'ios-contact'} size={20} color={'#127CC1'} />
              </View>
              <TouchableOpacity
                style={{
                  width: '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.setState({modelOneVisible: true})}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#000',
                  }}>
                  {this.state.item}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    width: '100%',
                  }}
                  placeholder={'Enter Phone Number'}
                  onChangeText={phone => this.setState({phone})}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
            {/*PasswordField*/}
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
              <View
                style={{
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={'ios-lock'} size={20} color={'#127CC1'} />
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    width: '100%',
                  }}
                  placeholder={'Enter Password'}
                  onChangeText={password => this.setState({password})}
                />
              </View>
            </View>
          </View>
        </View>
        {/*ButtonView*/}
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '60%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#127CC1',
              borderRadius: 12,
              padding: 11,
              marginTop: 50,
            }}
            onPress={() => this.storedata()}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/*CreateAccountView*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modelOneVisible}
          onRequestClose={() => this.setState({modelOneVisible: false})}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '70%',
              }}>
              <FlatList
                data={this.countrycodes}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        item: item.code,
                        image: item.img,
                        modelOneVisible: false,
                      })
                    }>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: '#127CC1',
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                      }}>
                      {/*ImageView*/}
                      <View
                        style={{
                          width: '30%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{
                            height: 60,
                            width: 60,
                          }}
                          source={item.img}
                        />
                      </View>
                      {/*nameView*/}
                      <View
                        style={{
                          width: '35%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#000',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      {/*codeView*/}
                      <View
                        style={{
                          width: '35%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
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
      </View>
    );
  }
}
