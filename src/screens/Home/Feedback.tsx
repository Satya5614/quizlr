import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  rateButtonContainer: {
    height: 52,
    width: 51,
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    backgroundColor: '#F17D23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  rateLabel: {
    fontSize: 15,
    lineHeight: 18,
    color: 'rgba(255,255,255,0.6)',
  },
  color2: {
    backgroundColor: '#FBB668',
  },
  color3: {
    backgroundColor: '#FFD449',
  },
  color4: {
    backgroundColor: '#16624F',
  },
  color5: {
    backgroundColor: '#1F8A70',
  },
});

const Feedback = () => {
  return (
    <>
      <Text style={styles.rateLabel}>How well did you know this?</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.rateButtonContainer}>
          <Text style={styles.rateButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rateButtonContainer, styles.color2]}>
          <Text style={styles.rateButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rateButtonContainer, styles.color3]}>
          <Text style={styles.rateButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rateButtonContainer, styles.color4]}>
          <Text style={styles.rateButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rateButtonContainer, styles.color5]}>
          <Text style={styles.rateButtonText}>5</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Feedback;
