import React, { useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Loader from '../../components/Loader';
import Card from '../../components/Card';
import { CharactersContext } from '../../components/CharactersContext';
import { ICharacter } from '../../components/CharactersContext/interfaces';

const Home = () => {
  const {
    isLoading,
    characters,
    characterActions,
  } = useContext(CharactersContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    characterActions.getList();
    return () => {
      characterActions.clear();
    };
  }, [characterActions]);

  const getNext = () => {
    console.log('CALL NEXT');
    // characterActions.getList({
    //   limit: 20,
    //   offset: 10,
    // });
  };

  const renderCharacterCard = ({ item }: { item: any }) => {
    return <Card data={item} nav={navigate} />;
  };

  return isLoading ? <Loader /> : (
    <FlatList
      data={characters}
      renderItem={renderCharacterCard}
      keyExtractor={(item: ICharacter) => `${item.id}`}
      onEndReached={getNext}
    />
  );
};

export default Home;
