/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ViewPager from '@react-native-community/viewpager';

export class Home extends React.Component {
  state = {
    detailone: false,
    detailtwo: false,
    detailthree: false,
    detailfour: false,
    detailfive: false,
    detailsix: false,
    detailseven: false,
    detaileight: false,
    modelVisible: false,
    man: false,
  };

  alertF = () => {
    Alert.alert(
      'Alert',
      'Are you want to add in Cart?',
      [
        {
          text: 'cancel',
          onPress: () => console.log('ceneel'),
          style: 'cancel',
        },
        {
          text: 'ok',
          onPress: () =>
            this.setState({
              modelVisible: true,
              detailone: false,
              detailtwo: false,
              detailthree: false,
              detailfour: false,
              detailfive: false,
              detailsix: false,
              detailseven: false,
              detaileight: false,
            }),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F9F9',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name={'md-menu'} color={'#127CC1'} size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 60,
              }}
              source={require('../../assests/nikeTwo.png')}
            />
          </View>
          <View
            style={{
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'md-cart'} color={'#127CC1'} size={35} />
          </View>
        </View>

        <View style={{width: '100%', flexDirection: 'row'}}>
            <TouchableOpacity style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              padding: 5,
              marginLeft: 25,
              marginTop: 15,
            }}
            onPress={()=>this.setState({man:!this.state.man})}
            >
          
            
            <Text
              style={{
                fontSize: 13,
                color: '#000',
              }}>
              Men
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              padding: 5,
              marginLeft: 25,
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
              }}>
              Woman
            </Text>
          </View>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 1,
              padding: 5,
              marginLeft: 25,
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
              }}>
              Kids
            </Text>
          </View>
        </View>
        {this.state.man===true?
        

        <ViewPager
          style={{
            width: '100%',
            height: '32%',
            marginTop: 20,
            padding: 12,
          }}
          initialPage={2}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="2">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailone: !this.state.detailone,
                    detailtwo: false,
                    detailthree: false,
                    detailfive: false,
                    detailsix: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="3">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailtwo: !this.state.detailtwo,
                    detailone: false,
                    detailthree: false,
                    detailfive: false,
                    detailsix: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesone.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 350
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="3">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailthree: !this.state.detailthree,
                    detailtwo: false,
                    detailone: false,
                    detailfive: false,
                    detailsix: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="4">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailfour: !this.state.detailfour,
                    detailone: false,
                    detailtwo: false,
                    detailthree: false,
                    detailfive: false,
                    detailsix: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesThree.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 150
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="5">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailfive: !this.state.detailfive,
                    detailtwo: false,
                    detailfour: false,
                    detailthree: false,
                    detailone: false,
                    detailsix: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="6">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailsix: !this.state.detailsix,
                    detailtwo: false,
                    detailfour: false,
                    detailthree: false,
                    detailfive: false,
                    detailone: false,
                    detailseven: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="7">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detailseven: !this.state.detailseven,
                    detailtwo: false,
                    detailfour: false,
                    detailthree: false,
                    detailfive: false,
                    detailsix: false,
                    detailone: false,
                    detaileight: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                borderWidth: 1,
                margin: 20,
                borderRadius: 8,
                borderColor: 'rgba(0,0,0,0.27)',
                borderBottomWidth: 3,
                borderLeftWidth: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
              key="8">
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    detaileight: !this.state.detaileight,
                    detailtwo: false,
                    detailfour: false,
                    detailthree: false,
                    detailfive: false,
                    detailsix: false,
                    detailseven: false,
                    detailone: false,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={require('../../assests/shoesFour.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    $ 200
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Nike
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                    }}>
                    SuperFoot Shoes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ViewPager>
        
        :
        null
                }
  
        {this.state.detailone === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailtwo === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 350
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>

                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailthree === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 350
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>

                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailfour === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailfive === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailsix === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detailseven === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {this.state.detaileight === true ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '90%',
                height: '69%',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
                backgroundColor: '#127CC1',
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  $ 200
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Nike
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  SUPERFLY 7 CLUB FM/TMG Shoes For Men Blue
                </Text>
              </View>
              {/*size*/}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Sizes :
                </Text>
              </View>
              {/*SizeNumner*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    6
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    7
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    8
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    9
                  </Text>
                </View>
                <View
                  style={{
                    width: '7%',
                    padding: 3,
                    backgroundColor: '#fff',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#000',
                    }}>
                    11
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Available Colors :
                </Text>
              </View>
              {/*ColorDetails*/}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'blue',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'red',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    padding: 3,
                    backgroundColor: 'orange',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'purple',
                    marginLeft: 15,
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 125,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '30%',
                    backgroundColor: '#F7F9F9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    padding: 5,
                  }}
                  onPress={() => this.alertF()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modelVisible}
          onRequestClose={() => this.setState({modelVisible: false})}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '60%',
                flexDirection: 'column',
                backgroundColor: '#127CC1',
                padding: 12,
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  Successfuly add to Cart
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require('../../assests/ticlk.png')}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
