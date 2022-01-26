import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export const WorkSpace = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.workSpace}>
        <TouchableOpacity>
          <Image
            source={require('../images/AddTodoButton.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  workSpace: {
    backgroundColor: '#222223',
  },
  image: {
    height: 75,
    width: 75,
  },
});
