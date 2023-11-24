import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
// import VectorImage from 'react-native-vector-image';

//import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [cameraType, setCameraType] = React.useState('front');
  const [cameraFlash, setCameraFlash] = React.useState('off');

  const handleCamera = () => {
    setCameraType(cameraType == 'front' ? 'back' : 'front');
  };
  const handleFlash = () => {
    setCameraFlash(cameraFlash == 'off' ? 'on' : 'off');
  };

  const handleCapture = async () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      try {
        const imageURI = await cameraRef.current.capture();
        setCapturedImage(imageURI);
        setModalVisible(false);
      } catch (error) {
        console.error('Error', error);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {/* <Text style={styles.modalText}>Hello World!</Text> */}

          <Camera
            style={{height: '85%', width: 500}}
            ref={cameraRef}
            flashMode={cameraFlash}
            cameraType={cameraType} // front/back(default)
          />
          <View style={styles.allButtonContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.captureButton}>
              <Text style={styles.captureText}> Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCapture}
              style={styles.captureButton}>
              <Text style={[styles.captureText, {width: 25}]}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCamera}
              style={styles.captureButton}>
              <Text style={styles.captureText}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFlash}
              style={styles.captureButton}>
              <Text style={styles.captureText}>Flash</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Open Camera</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    height: '100%',
    width: '100%',

    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 50,
    padding: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'darkblue',
    width: '50%',
    alignContent: 'center',
  },
  buttonClose: {
    backgroundColor: 'darkblue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 18,
    textAlign: 'center',
  },
  captureText: {
    fontSize: 18,
    color: 'white',
  },
  captureButton: {
    backgroundColor: 'darkblue',
    borderRadius: 50,
    padding: 10,
    margin: 25,
  },
  allButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //columnGap: 20,
  },
});
