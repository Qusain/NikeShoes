import React from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export class OnBoardScreen extends React.Component {
    render() {
        return (
            <View style={{
               flex:1
            }}>
                <Onboarding
                    showDone={true}
                    onDone={() => this.props.navigation.navigate('RegisterOptions')}
                    onSkip={() => this.props.navigation.navigate('RegisterOptions')}
                    pages={[
                        {
                            title: 'Hey!',
                            subtitle: 'Welcome to $App!',
                            backgroundColor: '#127CC1',
                       image:( <Image style={{
                            height: 100,
                            width: 130,
                            marginTop: -20,
                        }}
                               source={require('../../assests/nike.png')}
                        />
                       )
                        },

                        {
                            title: 'Send Messages',
                            subtitle: 'You can reach everybody with us',
                            backgroundColor: '#5e92f3',
                            image: (
                                <Icon
                                    name={'ios-mail'}

                                    size={100}
                                    color={'#fff'}
                                />
                            ),
                        },

                        {
                            title: 'Get Notified',
                            subtitle: 'We will send you notification as soon as something happened',
                            backgroundColor: '#1565c0',
                            image: (
                                <Icon
                                    name={"ios-notifications"}

                                    size={100}
                                    color={'#fff'}/>
                            ),
                        },

                        {
                            title: 'That\'s Enough',
                            subtitle:'Click on Done',
                            backgroundColor: '#127CC1',
                            image: (
                                <Icon
                                    name={"md-rocket"}
                                    size={100}
                                    color={'#fff'}/>
                            ),
                        },
                    ]}
                />

            </View>
        );
    }
}
