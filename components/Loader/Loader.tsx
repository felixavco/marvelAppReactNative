import React, { FunctionComponent } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { colors } from '../../config';
import styles from './Loader.styles';

const Loader: FunctionComponent<{ title?: string }> = ({
  title = 'Marvel App',
}) => (
  <View style={styles.container}>
    <View>
      <ActivityIndicator size='large' color={colors.primary} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Loader;
