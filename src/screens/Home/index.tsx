import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModules,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import Styles from '../../constants/styles';
import Flashcard from './Flashcard';
import MCQCard from './MCQCard';
import * as Icons from '../../assets/icons';
import TabBar from './TabBar';
import Timer from './Timer';

const {FamilyControlsModule} = NativeModules;

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
  const tabBarHeight = useBottomTabBarHeight();

  const height = Dimensions.get('window').height;
  const navbarHeight = 92;
  const carouselHeight = height - tabBarHeight - navbarHeight;

  useEffect(() => {
    FamilyControlsModule.requestAuthorization();
  }, []);

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
      {activeTab === 0 && (
        <Carousel
          loop
          vertical
          data={[0, 1, 2]}
          height={carouselHeight}
          renderItem={() => <Flashcard />}
        />
      )}
      {activeTab === 1 && (
        <Carousel
          loop
          vertical
          data={[0, 1, 2]}
          height={carouselHeight}
          renderItem={() => <MCQCard />}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
