import React from 'react';
import Modal from 'react-native-modal';
import ColorPicker from 'react-native-wheel-color-picker';
import {View, StyleSheet} from 'react-native';

const CustomModal = ({isModalVisible, setShow, currentColor, setColor}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setShow(false)}
      onBackButtonPress={() => setShow(false)}>
      <View style={styles.modalStyle}>
        <ColorPicker
          color={currentColor}
          onColorChange={val => setColor(val)}
          thumbSize={40}
          swatchesOnly={false}
          sliderHidden={true}
          sliderSize={40}
          row={false}
          swatches={false}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    height: '38%',
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CustomModal;
