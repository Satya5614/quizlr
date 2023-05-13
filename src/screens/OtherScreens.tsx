import React from 'react';
import {View, Text} from 'react-native';

import colors from '../constants/colors';
import Styles from '../constants/styles';

const OtherScreens = () => {
  return (
    <View style={Styles.centerInContainer}>
      <Text style={{color: colors.text.primary}}>Screen Name</Text>
    </View>
  );
};

export default OtherScreens;
