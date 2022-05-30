import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
const ModalPage = ({modalVisible, setModalVisible, data}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={{
                  uri: `${data.image}`,
                }}
                style={
                  data.gender == 'female'
                    ? styles.imagesfemale
                    : styles.imagesmale
                }
              />

              <View style={styles.rowview}>
                <Text style={styles.modalname}>{data.firstName}</Text>
                <Text style={styles.modalname}>{data.lastname}</Text>
              </View>
              <Text style={styles.modalText}>{data.email}</Text>
              <View style={styles.rowview}>
                <Text style={styles.title}>Phone:</Text>
                <Text style={styles.modalText}>{data.phone}</Text>
              </View>
              <View style={styles.rowview}>
                <Text style={styles.title}>Country:</Text>
                <Text style={styles.modalText}>{data.country}</Text>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>
                  <FontAwesome name="close" size={30} color="#fff" />
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    marginLeft: 3,
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginTop: 14,
  },
  modalname: {
    marginLeft: 3,
    fontSize: 18,
    color: '#000',
    marginTop: 15,
  },
  modaltitle: {
    fontSize: 16,
    color: '#000',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: 300,
    height: 450,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  imagesfemale: {
    width: 120,
    height: 120,
    borderRadius: 210 / 2,
    borderColor: 'red',
    borderColor: 'pink',
    borderWidth: 3,
  },
  imagesmale: {
    width: 120,
    height: 120,
    borderRadius: 210 / 2,
    borderColor: 'red',
    borderColor: 'dodgerblue',
    borderWidth: 3,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  buttonClose: {
    marginTop: 35,
  },

  rowview: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalPage;
