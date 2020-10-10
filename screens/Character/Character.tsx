import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fonts } from '../../config';

const Character = () => {
  const { params } = useRoute();
  const { name, thumbnail, description } = params.character;
  const uri = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri }} />
      <View style={styles.desciptionContainer}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>
          {description.length ? description : 'Description not available.'}
        </Text>
      </View>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: 350,
  },
  desciptionContainer: {
    padding: 15,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
});
