import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import * as Icons from '../assets/icons'; // assuming icons are in a separate file

const PlaylistSummary = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 42,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icons.Playlist fill="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            lineHeight: 16,
            fontWeight: '600',
            paddingHorizontal: 5,
          }}>
          Playlist - Unit 5: Period 5: 1844-1877
        </Text>
      </View>
      <Icons.Right fill="white" />
    </TouchableOpacity>
  );
};

export default PlaylistSummary;
