import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TopMenu } from './src/TopMenu';
import Footer from './src/Footer';
import { WorkSpace } from './src/WorkSpace';

export default function App() {
  return (
    <View>
      <View style={styles.view}>
        <TopMenu style={{ flex: 1 }} />
        <WorkSpace style={{ flex: 3 }} />
        <Footer style={{ flex: 1 }} />
      </View>
    </View>
  );
}
//Добавить градиент как нибудь
const styles = StyleSheet.create({
  view: {
    flex: 1,

    justifyContent: 'space-between',
  },
});
