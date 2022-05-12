/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {SvgXml} from 'react-native-svg';
import CustomModal from './src/components/CustomModal';

import Wheel from './src/assets/vector/wheelSvg';
import PickerIcon from './src/assets/vector/pickerIconSvg';
import STRINGS from './src/locale/local-en';

const App = () => {
  const [color, setColor] = React.useState('red');
  const [show, setShow] = React.useState(false);
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={color} />
        <View style={[styles.mainViewStyle, {backgroundColor: color}]}>
          <SvgXml
            onPress={() => {
              setShow(true);
            }}
            width="200"
            height="200"
            xml={Wheel}
          />
          <Text style={styles.textColor}>{STRINGS.home.select_color}</Text>
          <SvgXml
            onPress={() => {
              setShow(true);
            }}
            width="200"
            height="200"
            xml={PickerIcon}
          />
        </View>
      </SafeAreaView>
      <CustomModal
        currentColor={color}
        isModalVisible={show}
        setShow={val => setShow(val)}
        setColor={val => setColor(val)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    paddingTop: '10%',
    flex: 1,
  },
  textColor: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
