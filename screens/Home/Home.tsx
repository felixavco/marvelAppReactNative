import React, { useEffect, useState } from 'react';
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
  const [searchText, setSearchText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const {
    characters,
    searchTerm,
    isPageLoading,
    showSearchModal,
  } = useSelector((state: IStore) => state.characters);
  const { navigate } = useNavigation();

  useEffect(() => {
    characterActions.getList({});
    return () => {
      characterActions.clear();
    };
  }, [characterActions]);

  const onInputChange = (text: string) => {
    if (text) {
      setErrorMsg('');
      setSearchText(text);
    }
  };

  const getNext = () => {
    if (!searchTerm) {
      characterActions.getList({
        params: {
          limit: 20,
          offset: 10,
        },
      });
    }
  };

  const onSearch = () => {
    const textTrimed = searchText.trim();
    if (textTrimed) {
      dispatch({
        type: Types.SET_PAGE_LOADING,
        payload: true,
      });
      characterActions.search(textTrimed);
    } else {
      setErrorMsg('Please enter a valid name');
    }
  };

  const clearSearch = () => {
    dispatch({ type: Types.CLEAR_SEARCH_TERM });
    characterActions.getList({ reset: true });
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
          <TextInput
            autoFocus
            maxLength={30}
            style={styles.input}
            onChangeText={onInputChange}
            placeholder='what is your favorite hero?'
          />
          {errorMsg ? (
            <Text style={styles.errorMsg}>{errorMsg}</Text>
          ) : null}
          <View style={styles.buttonsWrapper}>
            <Button title='Cancel' onPress={() => dispatch(closeModal)} />
            <Button title='Search' color={colors.secondary} onPress={onSearch} />
          </View>
        </View>
      </Modal>
    );
  };

  const searchHead = () => {
    const clearBtn = <Button title='Clear' onPress={clearSearch} />;
    return (
      <View style={styles.headWrapper}>
        <View style={styles.searchHead}>
          <Text style={styles.searchHeadTitle}>
            Resutls for:
            <Text style={styles.searchTerm}>{` ${searchTerm}`}</Text>
          </Text>
          {characters.length ? clearBtn : null}
        </View>
        {!characters.length ? (
          <View>
            <Text style={styles.onEmptyResults}>
              Sorry! your search did not return any results
            </Text>
            {clearBtn}
          </View>
        ) : null}
      </View>

    );
  };

  return isPageLoading ? <Loader /> : (
    <View>
      {modal()}
      {searchTerm ? searchHead() : null}
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
  errorMsg: {
    fontSize: 12,
    color: colors.primary,
  },
  buttonsWrapper: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  searchHead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchHeadTitle: {
    fontSize: 16,
  },
  searchTerm: {
    fontWeight: 'bold',
  },
  onEmptyResults: {
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
    fontSize: 25,
    color: colors.primary,
  },
});
