import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PharmacyModal({isVisible, onAddPharmacy, onClose}) {
  const [pharmacyData, setPharmacyData] = useState({
    pName: '',
    medicineTypes: [{type: '', medicines: [{name: ''}]}],
  });

  const handleAddMedicineType = () => {
    setPharmacyData(prevData => ({
      ...prevData,
      medicineTypes: [
        ...prevData.medicineTypes,
        {
          type: '',
          medicines: [{name: ''}],
        },
      ],
    }));
  };

  const handleAddMedicine = typeIndex => {
    setPharmacyData(prevData => {
      const updatedType = [...prevData.medicineTypes];
      updatedType[typeIndex].medicines.push({name: ''});
      return {...prevData, medicineTypes: updatedType};
    });
  };

  // const add = () => {
  //   if (
  //     newPharmacies.trim() === '' ||
  //     newMedicineTypes.trim() === '' ||
  //     newMedicine.trim() === ''
  //   ) {
  //     alert('Please enter all the fields');
  //     return;
  //   }

  const handleSavePharmacy = () => {
    console.log('first1', pharmacyData);
    setPharmacyData({
      pName: '',
      medicineTypes: [{type: '', medicines: [{name: ''}]}],
    });

    const updatedType = pharmacyData.medicineTypes
      .map(type => ({
        type: type.type.trim(),
        medicines: type.medicines.filter(
          medicines => medicines.name.trim() !== '',
        ),
      }))
      .filter(type => type.medicines.length > 0);
    const newPharmacy = {
      pName: pharmacyData.pName.trim(),
      medicineTypes: updatedType,
    };
    console.log('first', newPharmacy);
    onAddPharmacy(newPharmacy);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.header}>Pharmacy</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputPharmacy}>
              <TextInput
                style={styles.input}
                placeholder="Enter Pharmacy Name"
                value={pharmacyData.pName}
                onChangeText={text =>
                  setPharmacyData(prevData => ({
                    ...prevData,
                    pName: text,
                  }))
                }
              />
            </View>

            {pharmacyData.medicineTypes.map((type, index) => (
              <View key={index}>
                <View style={styles.inputType}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Type"
                    value={type.type}
                    onChangeText={text =>
                      setPharmacyData(prevData => {
                        const updatedType = [...prevData.medicineTypes];
                        updatedType[index].type = text;
                        return {...prevData, medicineTypes: updatedType};
                      })
                    }
                  />
                  <TouchableOpacity
                    onPress={() => handleAddMedicineType()}
                    style={styles.addTypeBtn}>
                    <Text style={styles.buttonText}>Add Type</Text>
                  </TouchableOpacity>
                </View>

                {type.medicines.map((name, nameIndex) => (
                  <View style={styles.inputMedicine} key={nameIndex}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Medicine Name"
                      value={name.name}
                      onChangeText={text =>
                        setPharmacyData(prevData => {
                          const updatedType = [...prevData.medicineTypes];
                          updatedType[index].medicines[nameIndex].name = text;
                          return {...prevData, medicineTypes: updatedType};
                        })
                      }
                    />
                    <TouchableOpacity
                      style={styles.addMedicineBtn}
                      onPress={() => handleAddMedicine(index)}>
                      <Icon name="plus" size={22} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View style={styles.saveBtn}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSavePharmacy}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    height: '97%',
    backgroundColor: '#b3c9f4',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 30,
  },
  input: {
    height: 45,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 18,
  },
  inputPharmacy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputMedicine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTypeBtn: {
    backgroundColor: '#000080',
    borderRadius: 45,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    height: '80%',
    width: '35%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addMedicineBtn: {
    backgroundColor: '#000080', // Change color as needed
    borderRadius: 30,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    height: '80%',
    width: '16%',
    marginBottom: 10,
  },
  saveBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#000080',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '60%',
  },
});
