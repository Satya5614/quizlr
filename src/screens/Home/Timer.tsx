import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  timerText: {
    color: 'rgba(255,255,255,0.6)',
    paddingLeft: 4,
  },
});

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

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
