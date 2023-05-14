import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import * as Icons from '../../assets/icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 42,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  playlistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
});

const PlaylistSummary = ({data}: {data?: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.playlistContainer}>
        <Icons.Playlist fill="white" />
        <Text style={styles.text}>{data}</Text>
      </View>
      <Icons.Right fill="white" />
    </TouchableOpacity>
  );
};

export default PlaylistSummary;
