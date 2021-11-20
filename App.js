import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackgroundBase, StyleSheet, Text, View } from 'react-native';
import { TopMenu } from './src/TopMenu';
import { DownNav } from './src/DownNav';

export default function App() {
  return (
    <View style={styles.view}>
      <TopMenu/>
      <DownNav />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: '#242426',
    justifyContent: 'space-between',
    
  },
});
