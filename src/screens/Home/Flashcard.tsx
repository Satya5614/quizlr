import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseButton} from 'react-native-gesture-handler';

import Feedback from './Feedback';
import FlashcardMenu from './CardMenu';
import PlaylistSummary from './PlaylistSummary';
import Loading from '../../components/Loading';
import s from '../../constants/styles';
import API from '../../data/api';

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
export interface FlashcardDataProp {
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  playlist: string;
}

const Flashcard = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const onTapQues = () => setShowAnswer(!showAnswer);
  const [isLoading, setIsLoading] = useState(true);

  const [data, setFollowingData] = useState<FlashcardDataProp>();

  useEffect(() => {
    getFollowingData();
  }, []);

  const getFollowingData = async () => {
    setIsLoading(true);
    const d = await API.fetchFlashcardData();
    setFollowingData(d);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={[s.flex1]}>
      <View style={[s.flex1, s.row]}>
        <View style={styles.contentContainer}>
          <BaseButton onPress={onTapQues} style={styles.quesContainer}>
            <Text style={styles.quesText} numberOfLines={6}>
              {data?.flashcard_front}
            </Text>
            {showAnswer && (
              <>
                <View style={styles.divider} />
                <Text style={styles.answer}>Answer</Text>
                <Text style={styles.answerText} numberOfLines={9}>
                  {data?.flashcard_back}
                </Text>
              </>
            )}
          </BaseButton>
          {showAnswer && <Feedback />}
          <View style={styles.descriptionContainer}>
            <Text style={styles.username}>{data?.user?.name}</Text>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        </View>
        <FlashcardMenu avatar={data?.user?.avatar} />
      </View>
      <PlaylistSummary data={data?.playlist} />
    </View>
  );
};

export default Flashcard;
