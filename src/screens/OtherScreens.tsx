import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../navigator/types';
import colors from '../constants/colors';
import Styles from '../constants/styles';

type OtherScreensRouteProp = RouteProp<RootStackParamList, 'OtherScreens'>;

interface OtherScreensProps {
  route: OtherScreensRouteProp;
}

const OtherScreens = ({route}: OtherScreensProps) => {
  return (
    <View style={Styles.centerInContainer}>
      <Text style={{color: colors.text.primary}}>{route.name}</Text>
    </View>
  );
};

export default OtherScreens;
