/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, images} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export class ImageSlider extends React.Component {
  state = {
    images: [
      require('../../assests/pakistan.png'),
      require('../../assests/afghanistan.png'),
      require('../../assests/india.png'), // Local image
      require('../../assests/china.png'),
    ],
  };

  render() {
    return (
      <View style={{}}>
        <SliderBox images={this.state.images} autoplay circleLoop />
      </View>
    );
  }
}
