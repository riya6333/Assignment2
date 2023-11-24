import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';

import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const actionSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleUpload = () => {
    actionSheetRef.current?.hide();
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.text}>Upload Profile !</Text>
      </View>
      <Image
        source={
          selectedImage ? {uri: selectedImage} : require('./images/user.png')
        }
        style={styles.pics}
      />

      <TouchableOpacity onPress={() => actionSheetRef.current?.show()}>
        <Icon name="edit" color="black" size={50} style={styles.icon}></Icon>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          //paddingBottom: 20,
          //paddingTop: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={() => {
            handleUpload();
          }}>
          <Text style={styles.captureText}>Upload from Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureButton} onPress={handleCamera}>
          <Text style={styles.captureText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={() => actionSheetRef.current?.hide()}>
          <Text style={styles.captureText}>Cancel</Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 30,
    //justifyContent: 'center',
    margin: 30,
  },

  captureText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  captureButton: {
    backgroundColor: 'black',
    //borderRadius: 50,
    padding: 30,
    marginBottom: 3,

    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelButton: {
    backgroundColor: 'gray',

    padding: 20,
    margin: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: -100,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 140,
    marginTop: -50,
  },
  pics: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },
});
