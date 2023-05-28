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
  const setActivitySchedule = () => {
    FamilyControlsModule.setMonitorActivitySchedule(20);
  };

  const onPressEncourage = () => {
    FamilyControlsModule.selectAppsToEncourage();
  };

  return (
    <View style={Styles.centerInContainer}>
      <Button
        title="Monitor Activity"
        color="#fff"
        onPress={setActivitySchedule}
      />
      <Button
        title="Select Apps to Shield"
        color="#fff"
        onPress={onPressEncourage}
      />
      <Button title="Remove Shield" color="#fff" onPress={onPressEncourage} />
    </View>
  );
};

export default OtherScreens;
