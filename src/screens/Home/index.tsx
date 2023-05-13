import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

import Styles from '../../constants/styles';
import Flashcard from './Flashcard';
import PlaylistSummary from './PlaylistSummary';
import * as Icons from '../../assets/icons';
import TabBar from './TabBar';
import Timer from './Timer';

const styles = StyleSheet.create({
  novContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  timerContainer: {
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'row',
  },
  searchContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
});

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={[Styles.flex1]}>
      <View style={styles.novContainer}>
        <View style={styles.timerContainer}>
          <Icons.Stopwatch fill="rgba(255,255,255,0.6)" />
          <Timer />
        </View>
        <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />
        <TouchableOpacity style={styles.searchContainer}>
          <Icons.Search fill="white" />
        </TouchableOpacity>
      </View>
      <Flashcard />
      <PlaylistSummary />
    </SafeAreaView>
  );
};

export default Home;
