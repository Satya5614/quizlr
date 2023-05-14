import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import s from '../../constants/styles';
import FlashcardMenu from './CardMenu';
import PlaylistSummary from './PlaylistSummary';
import McqOption from './McqOption';
import API from '../../data/api';
import Loading from '../../components/Loading';

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

interface MCQOptionDataProps {
  id: string;
  answer: string;
}

export interface MQCardDataProp {
  id: number;
  question: string;
  options: MCQOptionDataProps[];
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  playlist: string;
}

const MCQCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [data, setMCQData] = useState<MQCardDataProp>();

  const onSelectOption = (ans: string) => () => {
    setSelectedAnswer(ans);
  };

  useEffect(() => {
    getMCQData();
  }, []);

  const getMCQData = async () => {
    setIsLoading(true);
    const mcq = await API.fetchMCQData();
    const answerData = await API.fetchMCQAnswer(mcq?.id);
    const correctAnswers = answerData?.correct_options.map(
      (option: {id: string}) => option.id,
    );
    setMCQData(mcq);
    setAnswer(correctAnswers);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={[s.flex1]}>
      <View style={[s.flex1, s.row]}>
        <View style={styles.contentContainer}>
          <View style={styles.quesContainer}>
            <Text style={styles.quesText} numberOfLines={5}>
              {data?.question}
            </Text>
          </View>
          {data?.options.map(option => (
            <McqOption
              key={option.id}
              label={option.answer}
              reveal={selectedAnswer !== ''}
              onSelect={onSelectOption(option.id)}
              isWrong={
                selectedAnswer === option.id && !answer.includes(option.id)
              }
              isCorrect={answer.includes(option.id)}
            />
          ))}
          <View style={styles.descriptionContainer}>
            <Text style={styles.username}>{data?.user?.name}</Text>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        </View>
        <FlashcardMenu enableFollow avatar={data?.user?.avatar} />
      </View>
      <PlaylistSummary data={data?.playlist} />
    </View>
  );
};

export default MCQCard;
