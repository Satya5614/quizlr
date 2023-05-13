import React from 'react';
import {View} from 'react-native';

import s from '../constants/styles';
import FlashcardMenu from './FlashcardMenu';

const Flashcard = () => {
  return (
    <View style={[s.flex1, s.row]}>
      <View style={s.flex1}>
        <View style={s.flex1} />
      </View>
      <FlashcardMenu />
    </View>
  );
};

export default Flashcard;
