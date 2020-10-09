import React, { FunctionComponent } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { colors, fonts, screens } from '../../config';
import { ICharacter } from '../CharactersContext/interfaces';

interface IProps {
  data: ICharacter;
  nav: Function;
}

const Card: FunctionComponent<IProps> = ({ data, nav }) => {
  // eslint-disable-next-line operator-linebreak
  const Touchable: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const navigate = () => {
    nav(screens.character, { character: data });
  };

  const uri = `${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Touchable onPress={navigate}>
          <ImageBackground
            source={{ uri }}
            style={styles.imageBackground}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.name}</Text>
            </View>
          </ImageBackground>
        </Touchable>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 350,
    width: '95%',
    marginTop: 15,
  },
  imageBackground: {
    padding: 5,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    bottom: 0,
    padding: 10,
    width: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    color: colors.textWhite,
    fontFamily: fonts.primaryBold,
  },
});
