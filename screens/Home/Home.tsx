import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';
import Card from '../../components/Card';
import characterActions from '../../store/characters/characters.actions';
import { ICharacter } from '../../store/characters/characters.interfaces';
import { IStore } from '../../store';

const Home = () => {
  const { characters, isLoading } = useSelector((state: IStore) => state.characters);
  const { navigate } = useNavigation();

  useEffect(() => {
    characterActions.getList();
    return () => {
      characterActions.clear();
    };
  }, [characterActions]);

  const getNext = () => {
    console.log('CALL SSSS');
    characterActions.getList({
      limit: 20,
      offset: 10,
    });
  };

  const renderCharacterCard = ({ item }: { item: any }) => {
    return <Card data={item} nav={navigate} />;
  };

  return isLoading ? <Loader /> : (
    <FlatList
      numColumns={2}
      data={characters}
      onEndReached={getNext}
      onEndReachedThreshold={0.5}
      renderItem={renderCharacterCard}
      keyExtractor={(item: ICharacter) => `${item.id}`}
    />
  );
};

export default Home;
