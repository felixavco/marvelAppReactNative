import React, { useEffect } from 'react';
import { FlatList, View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import characterActions from '../../store/characters/characters.actions';
import { ICharacter } from '../../store/characters/characters.interfaces';
import { IStore } from '../../store';
import { Types } from '../../store/characters/characters.reducer';
import { colors } from '../../config';

const Home = () => {
  const dispatch = useDispatch();
  const {
    characters,
    isPageLoading,
    showSearchModal,
  } = useSelector((state: IStore) => state.characters);
  const { navigate } = useNavigation();

  useEffect(() => {
    characterActions.getList();
    return () => {
      characterActions.clear();
    };
  }, [characterActions]);

  const getNext = () => {
    characterActions.getList({
      limit: 20,
      offset: 10,
    });
  };

  const renderCharacterCard = ({ item }: { item: any }) => {
    return <Card data={item} nav={navigate} />;
  };

  const modal = () => {
    const closeModal = {
      type: Types.SET_SHOW_MODAL,
      payload: false,
    };
    return (
      <Modal
        show={showSearchModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Search Character</Text>
          <Text style={styles.text}>Search your favorite character</Text>
          <TextInput placeholder='what is your favorite hero?' style={styles.input} />
          <View style={styles.buttonsWrapper}>
            <Button text='Cancel' onPress={() => dispatch(closeModal)} />
            <Button text='Search' color={colors.secondary} onPress={() => console.log('SEARCHING....')} />
          </View>
        </View>
      </Modal>
    );
  };

  return isPageLoading ? <Loader /> : (
    <View>
      {modal()}
      <FlatList
        numColumns={2}
        data={characters}
        onEndReached={getNext}
        onEndReachedThreshold={0.5}
        renderItem={renderCharacterCard}
        keyExtractor={(item: ICharacter) => `${item.id}`}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    width: '75%',
    height: 210,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderStyle: 'solid',
    borderColor: colors.secondary,
  },
  buttonsWrapper: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
