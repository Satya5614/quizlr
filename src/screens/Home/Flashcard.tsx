import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import s from '../../constants/styles';
import FlashcardMenu from './FlashcardMenu';
import PlaylistSummary from './PlaylistSummary';
import Feedback from './Feedback';
import MCQ from './MCQ';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  quesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quesText: {
    fontSize: 21,
    lineHeight: 25,
    color: 'white',
  },
  username: {
    fontSize: 18,
    lineHeight: 22,
    color: 'white',
    paddingBottom: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 18,
    color: 'white',
  },
  divider: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'stretch',
    marginVertical: 20,
  },
  answer: {
    color: '#2DC59F',
    fontWeight: '800',
    fontSize: 13,
    paddingBottom: 4,
  },
  answerText: {
    fontSize: 21,
    lineHeight: 25,
    color: 'rgba(255,255,255,0.7)',
  },
  descriptionContainer: {
    paddingTop: 20,
  },
});

interface FlashcardProps {
  activeTab: number;
}

const Flashcard = ({activeTab}: FlashcardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const onTapQues = () => setShowAnswer(!showAnswer);

  useEffect(() => {
    if (activeTab === 1) {
      setShowAnswer(false);
    }
  }, [activeTab]);

  return (
    <View style={[s.flex1]}>
      <View style={[s.flex1, s.row]}>
        <View style={s.flex1}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              disabled={activeTab !== 0}
              activeOpacity={0.8}
              onPress={onTapQues}
              style={styles.quesContainer}>
              <Text style={styles.quesText} numberOfLines={5}>
                What was the name of the Act that created federal subsidies for
                the construction of a transcontinental railroad?
              </Text>
              {showAnswer && (
                <>
                  <View style={styles.divider} />
                  <Text style={styles.answer}>Answer</Text>
                  <Text style={styles.answerText} numberOfLines={9}>
                    With the rapid settlement in western territories, Congress
                    decided that an efficient railroad transport to the Pacific
                    coast would be beneficial and passed the Pacific Railway Act
                    of 1862 during the Civil War to promote easier western
                    transportation for the North.
                  </Text>
                </>
              )}
            </TouchableOpacity>
            {showAnswer && <Feedback />}
            {activeTab === 1 && <MCQ />}
            <View style={styles.descriptionContainer}>
              <Text style={styles.username}>AP US History</Text>
              <Text style={styles.description}>
                Topic 5.2: Manifest Destiny #apush5_1
              </Text>
            </View>
          </View>
        </View>
        <FlashcardMenu activeTab={activeTab} />
      </View>
      <PlaylistSummary />
    </View>
  );
};

export default Flashcard;
