import React from 'react';
import {StyleSheet} from 'react-native';
import McqOption from './McqOption';

const styles = StyleSheet.create({

});

const MCQ = () => {
  return (
    <>
      <McqOption isCorrect reveal label="Pacific Railway Act" />
      <McqOption reveal isWrong label="Interstate Commerce Act" />
      <McqOption reveal label="Homestead Act" />
    </>
  );
};

export default MCQ;
