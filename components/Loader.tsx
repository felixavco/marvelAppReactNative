import React, { FunctionComponent } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../config';

const Loader: FunctionComponent<{ title?: string }> = ({
  title = 'Marvel App',
}) => (
    // eslint-disable-next-line react/jsx-indent
    <View style={styles.container}>
      <View>
        <ActivityIndicator size='large' color={colors.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
    // eslint-disable-next-line indent
  );

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: 16,
  },
});
