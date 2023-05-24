import React from 'react';
import {View, NativeModules, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../navigator/types';
import Styles from '../constants/styles';

const {FamilyControlsModule} = NativeModules;

type OtherScreensRouteProp = RouteProp<RootStackParamList, 'OtherScreens'>;

interface OtherScreensProps {
  route: OtherScreensRouteProp;
}

const OtherScreens = ({route}: OtherScreensProps) => {
  const onPressDiscourage = () => {
    FamilyControlsModule.selectAppsToDiscourage();
  };

  const onPressEncourage = () => {
    FamilyControlsModule.selectAppsToEncourage();
  };

  const onPressAuthorize = () => {
    FamilyControlsModule.requestAuthorization();
  };

  return (
    <View style={Styles.centerInContainer}>
      <Button
        title="Discourage Apps"
        color="#fff"
        onPress={onPressDiscourage}
      />
      <Button title="Encourage Apps" color="#fff" onPress={onPressEncourage} />
      <Button title="Authorize" color="#fff" onPress={onPressAuthorize} />
    </View>
  );
};

export default OtherScreens;
