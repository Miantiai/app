import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const TopMenu = (props) => {
  return (
    <View style={styles.topMenu}>
      <Text style={styles.text}>Задачи</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topMenu: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#484B50',
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 15,
  },
});
