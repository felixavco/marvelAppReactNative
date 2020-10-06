import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { CharactersContext } from '../../components/CharactersContext';


const Home = () => {
  const { characterActions, characters } = useContext(CharactersContext);

  useEffect(() => {
    characterActions.getList();
    return () => {
      characterActions.clear();
    }
  }, [characterActions]);

  return (
    <View>
      <Text>HOME</Text>
    </View>
  )
}

export default Home
