import React, { FC } from 'react';
import { StyleSheet, Modal, View } from 'react-native';

interface IProps {
  show: boolean;
  animationType?: 'none' | 'slide' | 'fade',
}

const index: FC<IProps> = ({ children, show, animationType = 'slide' }) => (
  <Modal
    transparent
    animationType={animationType}
    visible={show}
  >
    <View style={styles.wrapper}>
      {children}
    </View>
  </Modal>
);

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
