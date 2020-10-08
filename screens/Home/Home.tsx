import React, { useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Loader from '../../components/Loader';
import Card from '../../components/Card';
import { CharactersContext } from '../../components/CharactersContext';

const Home = () => {
  const { characterActions, characters, isLoading } = useContext(CharactersContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    characterActions.getList({ limit: 100 });
    return () => {
      characterActions.clear();
    };
  }, [characterActions]);

  const renderCharacterCard = ({ item }: { item: any }) => {
    return <Card data={item} nav={navigate} />;
  };

  return isLoading ? <Loader /> : (
    <FlatList
      data={characters}
      renderItem={renderCharacterCard}
    />
  );
};

export default Home;
