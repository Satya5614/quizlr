import * as React from 'react';
import {View} from 'react-native';

import Styles from '../constants/styles';
import Flashcard from '../components/Flashcard';
import PlaylistSummary from '../components/PlaylistSummary';

const Home = () => {
  return (
    <View style={Styles.flex1}>
      <Flashcard />
      <PlaylistSummary />
    </View>
  );
};

export default Home;
