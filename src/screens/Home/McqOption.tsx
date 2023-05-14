import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Icons from '../../assets/icons';

const styles = StyleSheet.create({
  mcqOption: {
    height: 52,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  mcqOptionText: {
    fontSize: 17,
    lineHeight: 20,
    color: 'white',
  },
  correctOption: {
    backgroundColor: '#28B18F',
  },
  wrongOption: {
    backgroundColor: '#DC5F5F',
  },
});

interface McqOptionProps {
  isCorrect: boolean;
  isWrong: boolean;
  reveal: boolean;
  label: string;
}

const McqOption = ({isCorrect, isWrong, reveal, label}: McqOptionProps) => {
  const correctOptionStyle = reveal && isCorrect ? styles.correctOption : {};
  const wrongOptionStyle = reveal && isWrong ? styles.wrongOption : {};
  return (
    <TouchableOpacity
      disabled={reveal}
      style={[styles.mcqOption, correctOptionStyle, wrongOptionStyle]}>
      <Text style={styles.mcqOptionText}>{label}</Text>
      {reveal && isCorrect && <Icons.Correct fill="rgba(255,255,255,0.6)" />}
      {reveal && isWrong && <Icons.Wrong fill="rgba(255,255,255,0.6)" />}
    </TouchableOpacity>
  );
};

export default McqOption;
