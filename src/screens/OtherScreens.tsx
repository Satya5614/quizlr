import React from 'react';
import {View, NativeModules, Button, Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../navigator/types';
import Styles from '../constants/styles';

const {FamilyControlsModule} = NativeModules;

type OtherScreensRouteProp = RouteProp<RootStackParamList, 'OtherScreens'>;

interface OtherScreensProps {
  route: OtherScreensRouteProp;
}

const OtherScreens = ({route}: OtherScreensProps) => {
  const removeShield = () => {
    FamilyControlsModule.removeShield();
  };

  const setActivitySchedule = () => {
    Alert.prompt(
      'Set Allowed Time',
      'Enter the number of seconds you want to remove the shield',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Set',
          onPress: result => {
            removeShield();
            FamilyControlsModule.setMonitorActivitySchedule(+result || 0);
          },
        },
      ],
      'plain-text',
    );
  };

  // FamilyControlsModule.setMonitorActivitySchedule(20);

  const selectAppsToShield = () => {
    FamilyControlsModule.selectAppsToShield();
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
        onPress={selectAppsToShield}
      />
      <Button title="Remove Shield" color="#fff" onPress={removeShield} />
    </View>
  );
};

export default OtherScreens;
