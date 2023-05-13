import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TabBarProps {
  activeTab: number;
  onChangeTab: (newTab: number) => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 0.6,
  },
  tabButton: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  activeTabIndicator: {
    width: 30,
    height: 4,
    backgroundColor: 'white',
    marginTop: 5,
  },
  active: {
    fontWeight: '700',
  },
  inactive: {
    fontWeight: '400',
  },
});

const TabBar = ({activeTab, onChangeTab}: TabBarProps) => {
  const onPressTab = (tabId: number) => () => onChangeTab(tabId);

  const renderTabButton = (text: string, index: number) => {
    const isActive = activeTab === index;
    return (
      <TouchableOpacity onPress={onPressTab(index)} style={styles.tabButton}>
        <Text
          style={[styles.tabText, isActive ? styles.active : styles.inactive]}>
          {text}
        </Text>
        {isActive && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTabButton('Following', 0)}
      {renderTabButton('For You', 1)}
    </View>
  );
};

export default TabBar;
