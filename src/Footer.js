import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// Почему-то я не могу использовать export const вместо export function
// Надо разобраться чем они отличаються и как их использовать
export default function Footer() {
  //Добавить изображение с макета с надписью 'Задания'
  return (
    <View style={styles.view}>
      <View style={styles.taskMenu}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 50,
    backgroundColor: '#484B50',
  },
  taskMenu: {},
});
