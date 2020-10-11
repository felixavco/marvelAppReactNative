import React, { FC } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ButtonProps,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { colors } from '../config';

interface IProps extends ButtonProps {
  title: string;
  color?: string;
}

const Button: FC<IProps> = ({ title, color = colors.primary, ...rest }) => {
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
      textAlign: 'center',
    },
  });
  return (
    <Touchable {...rest}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Touchable>
  );
};

export default Button;
