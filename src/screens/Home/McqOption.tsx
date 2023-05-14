import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import * as Icons from '../../assets/icons';

const styles = StyleSheet.create({
  mcqOption: {
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
    flexWrap: 'wrap',
    flex: 1,
  },
  correctOption: {
    backgroundColor: '#28B18F',
  },
  wrongOption: {
    backgroundColor: '#DC5F5F',
  },
  divider: {
    width: 10,
  },
});

interface McqOptionProps {
  isCorrect?: boolean;
  isWrong?: boolean;
  reveal?: boolean;
  label: string;
  onSelect?: () => void;
}

const McqOption = ({
  isCorrect,
  isWrong,
  reveal,
  label,
  onSelect,
}: McqOptionProps) => {
  const correctOptionStyle = reveal && isCorrect ? styles.correctOption : {};
  const wrongOptionStyle = reveal && isWrong ? styles.wrongOption : {};
  return (
    <TouchableOpacity
      disabled={reveal}
      onPress={onSelect}
      style={[styles.mcqOption, correctOptionStyle, wrongOptionStyle]}>
      <Text style={styles.mcqOptionText}>{label}</Text>
      {reveal && (isCorrect || isWrong) && <View style={styles.divider} />}
      {reveal && isCorrect && <Icons.Correct fill="rgba(255,255,255,0.6)" />}
      {reveal && isWrong && <Icons.Wrong fill="rgba(255,255,255,0.6)" />}
    </TouchableOpacity>
  );
};

export default McqOption;
