import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, NativeModules, AppState} from 'react-native';

const {FamilyControlsModule} = NativeModules;

const styles = StyleSheet.create({
  timerText: {
    color: 'rgba(255,255,255,0.6)',
    paddingLeft: 4,
  },
});

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const setActivitySchedule = (nextAppState: string) => {
    if (nextAppState === 'background' || nextAppState === 'inactive') {
      FamilyControlsModule.removeShield();
      FamilyControlsModule.setMonitorActivitySchedule(seconds);
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      setActivitySchedule,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (seconds < 60) {
      return `${remainingSeconds.toString().padStart(2, '0')}s`;
    }

    return `${minutes.toString().padStart(2, '0')}m`;
  };

  return <Text style={styles.timerText}>{displayTime()}</Text>;
};

export default Timer;
