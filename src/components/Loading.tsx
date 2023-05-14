import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 100, width: 100},
});

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/loading.gif')}
        style={styles.image}
      />
    </View>
  );
};

export default Loading;
