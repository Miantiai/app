import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export const TopMenu = (props) => {
  const onPressTest = () => alert('LOL:)'); // Константа с функцией сплывающего окна при нажатии "Задачи"
  return (
    //Проблемы с добавлением кнопки в шапке - сделанно! МАТЬ ЕГО!
    //Осталось стилизовать, анимировать и поставить кнопку.
    <View style={styles.topMenu}>
      <Image
        source={require('../images/TopMenuLeftButton.png')}
        style={styles.topMenuLeftButton}
      />
      <View style={styles.TextContainer}>
        <Text style={styles.text} onPress={onPressTest}>
          Задачи
        </Text>
      </View>
      <Image
        source={require('../images/TopMenuRightButton.png')}
        style={styles.topMenuRightButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  topMenu: {
    paddingTop: '10%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#484B50',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  //Как сделать закругление углов у блока -- сделано
  TextContainer: {
    borderRadius: 50,
    backgroundColor: '#4A86E8',
    // добавить размытую черную границу - сделанно частично только в web версии тень отрисовывается
    borderWidth: 1,
    //box-shadow: 0px 0px 40px 40px #000000; - css свойство для размытия тени
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginTop: 3,
    marginBottom: 5,
    marginHorizontal: 18,
  },
  topMenuLeftButton: {
    height: 25,
    width: 25,
    top: 5,
    right: 20,
  },
  topMenuRightButton: {
    height: 25,
    width: 25,
    top: 5,
    left: 20,
  },
});
