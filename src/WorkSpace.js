import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export const WorkSpace = (props) => {
  return (
    <View>
      <View style={styles.workSpace}>
        <TouchableOpacity>
          <Image
            source={require('../images/AddTodoButton.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workSpace: {},
  image: {
    height: 75,
    width: 75,
    position: 'absolute',
    top: 210,
    left: 279,
  },
});
