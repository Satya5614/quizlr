import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModules,
  Alert,
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
  const tabBarHeight = useBottomTabBarHeight();
  const [activeTab, setActiveTab] = useState(0);
  const [authStatus, setAuthStatus] = useState('' as string);

  const height = Dimensions.get('window').height;
  const navbarHeight = 92;
  const carouselHeight = height - tabBarHeight - navbarHeight;

  const auth = async () => {
    const result = await FamilyControlsModule.requestAuthorization();
    setAuthStatus(result);
  };

  useEffect(() => {
    if (authStatus !== 'approved') {
      auth();
    }
    if (authStatus === 'approved') {
      FamilyControlsModule.isAppToShieldSelected((selected: string) => {
        if (selected === 'no') {
          Alert.alert(
            'Select apps to Block',
            'You have not selected any apps to shield. Please select apps to shield.',
            [
              {
                text: 'OK',
                onPress: () => {
                  FamilyControlsModule.selectAppsToShield();
                },
              },
            ],
          );
        }
      });
    }
  }, [authStatus]);

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
