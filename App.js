import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TopMenu } from './src/TopMenu';
import Footer from './src/Footer';
import { WorkSpace } from './src/WorkSpace';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View style={styles.view}>
      <TopMenu />
      <WorkSpace />
      <Footer />
    </View>
  );
}
//Добавить градиент как нибудь
const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: '#242426',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
});
