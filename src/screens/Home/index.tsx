import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Styles from '../../constants/styles';
import Flashcard from './Flashcard';
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
  const height = Dimensions.get('window').height;
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
      <Carousel
        vertical
        enabled={activeTab === 0}
        height={height - 170}
        data={['red', 'green', 'yellow']}
        renderItem={() => <Flashcard activeTab={activeTab} />}
      />
    </SafeAreaView>
  );
};

export default Home;
