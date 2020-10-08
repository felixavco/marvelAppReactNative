import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import styles from './Card.styles';

interface IProps {
  data: any;
  nav: Function;
}

const Card: FunctionComponent<IProps> = ({ data, nav }) => {
  // eslint-disable-next-line operator-linebreak
  const Touchable: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  console.log(data);
  return (
    <Touchable onPress={() => console.log('test')}>
      <View>
        <Text>{data.name}</Text>
      </View>
    </Touchable>
  );
};

export default Card;
