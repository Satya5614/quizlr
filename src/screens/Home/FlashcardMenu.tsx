import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import * as Icons from '../../assets/icons';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    paddingTop: 16,
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    paddingTop: 8,
    fontSize: 12,
    fontWeight: '400',
  },
  avatar: {
    paddingBottom: 28,
  },
  addIcon: {
    backgroundColor: '#28B18F',
    height: 24,
    width: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -14,
  },
  emptyView: {
    backgroundColor: 'transparent',
  },
});

interface Props {
  icon: React.ReactNode;
  label: string | number;
}

const MenuButton = ({icon, label}: Props) => {
  return (
    <TouchableOpacity style={[styles.icon, styles.button]}>
      {icon}
      <Text style={styles.icon}>{label}</Text>
    </TouchableOpacity>
  );
};

interface FlashcardMenuProps {
  activeTab: number;
}

function FlashcardMenu({activeTab}: FlashcardMenuProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.button]}>
          <Image source={require('../../assets/images/avatar.png')} />
          {activeTab === 1 ? (
            <View style={styles.addIcon}>
              <Icons.Add fill="white" />
            </View>
          ) : (
            <View style={[styles.addIcon, styles.emptyView]} />
          )}
        </TouchableOpacity>
        <MenuButton icon={<Icons.Like fill="white" />} label={87} />
        <MenuButton icon={<Icons.Comments fill="white" />} label={2} />
        <MenuButton icon={<Icons.Share fill="white" />} label={17} />
        <MenuButton icon={<Icons.Bookmark fill="white" />} label={203} />
        <MenuButton icon={<Icons.Flip fill="white" />} label={'Flip'} />
      </View>
    </View>
  );
}

export default FlashcardMenu;
