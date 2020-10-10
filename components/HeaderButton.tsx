import React, { FC } from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { colors } from '../config';

const index: FC = (props) => {
  const buttonColor = Platform.OS === 'android' ? colors.textWhite : colors.primary;
  return (
    <HeaderButton
      iconSize={23}
      IconComponent={Ionicons}
      color={buttonColor}
      {...props}
    />
  );
};

export default index;
