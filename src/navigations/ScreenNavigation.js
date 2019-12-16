import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SignIn} from '../screens/signin';
import {SignUp} from '../screens/signup';
import {RegisterOptions} from '../screens/registeroptions';
import {OnBoardScreen} from '../screens/onboardscreen';
import {Splash} from '../screens/splash';
import {UploadImage} from '../screens/uploadImage';
import {Home} from '../screens/home';
import {DrawerScreen} from '../screens/drawerscreen';
import DrawerNavigation from './DrawerNavigation';
import {ImageSlider} from '../screens/imageslider';

const ScreenNavigation = createStackNavigator(
  {
    // Splash,
    // OnBoardScreen,
    // RegisterOptions,
    // SignIn,
    // SignUp,
    // UploadImage,
    DrawerNavigation,
    ImageSlider,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: 'false',
    },
  },
);
export default createAppContainer(ScreenNavigation);
