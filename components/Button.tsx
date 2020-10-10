import React, { FC } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { colors } from '../config';

interface IProps {
  text: string;
  onPress: Function;
  color?: string;
}

const Button: FC<IProps> = ({ text, onPress, color = colors.primary }) => {
  // eslint-disable-next-line operator-linebreak
  const Touchable: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderColor: color,
      borderWidth: 1,
      borderRadius: 5,
    },
    text: {
      color,
      fontSize: 16,
      fontWeight: 'normal',
    },
  });
  return (
    <Touchable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Touchable>
  );
};

export default Button;
