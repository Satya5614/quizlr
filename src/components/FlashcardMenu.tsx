import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import * as Icons from '../assets/icons';

const FlashcardMenu = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <TouchableOpacity style={{paddingTop: 16}}>
          <Image source={require('../assets/images/avatar.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={{paddingTop: 28, alignItems: 'center'}}>
          <Icons.Like fill="white" />
          <Text
            style={{
              color: 'white',
              paddingTop: 10,
              fontSize: 12,
              fontWeight: '400',
            }}>
            87
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{paddingTop: 16, alignItems: 'center'}}>
          <Icons.Comments fill="white" />
          <Text
            style={{
              color: 'white',
              paddingTop: 10,
              fontSize: 12,
              fontWeight: '400',
            }}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop: 16, alignItems: 'center'}}>
          <Icons.Share fill="white" />
          <Text
            style={{
              color: 'white',
              paddingTop: 10,
              fontSize: 12,
              fontWeight: '400',
            }}>
            17
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{paddingTop: 16, alignItems: 'center'}}>
          <Icons.Bookmark fill="white" />
          <Text
            style={{
              color: 'white',
              paddingTop: 10,
              fontSize: 12,
              fontWeight: '400',
            }}>
            203
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{paddingTop: 16, alignItems: 'center'}}>
          <Icons.Flip fill="white" />
          <Text
            style={{
              color: 'white',
              paddingTop: 10,
              fontSize: 12,
              fontWeight: '400',
            }}>
            Flip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlashcardMenu;
