import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import PharmacyModal from './PharmacyModal';

const PharmacyData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pharmacies, setPharmacies] = useState([
    {
      pName: 'Pharmacy A',
      medicineTypes: [
        {
          type: 'Painkillers',
          medicines: [{name: 'Ibuprofen'}, {name: 'Acetaminophen'}],
        },
        {
          type: 'Antibiotics',
          medicines: [{name: 'Amoxicillin'}, {name: 'Ciprofloxacin'}],
        },
      ],
    },
  ]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const MedicineItem = ({item}) => (
    <View
      style={{padding: 10, borderBottomWidth: 2, borderBottomColor: '#ccc'}}>
      <Text>{item.name}</Text>
    </View>
  );

  const MedicineTypeItem = ({item}) => (
    <View style={{padding: 10, backgroundColor: '#f0f0f0'}}>
      <Text style={{fontWeight: 'bold'}}>{item.type}</Text>
      <FlatList
        data={item.medicines}
        keyExtractor={(medicine, index) => String(index)}
        // renderItem={({item}) => <MedicineItem medicine={item} />}
        renderItem={MedicineItem}
      />
    </View>
  );

  const PharmacyItem = ({item}) => (
    <View style={{margin: 10}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.pName}</Text>
      <FlatList
        data={item.medicineTypes}
        keyExtractor={(type, index) => String(index)}
        // renderItem={({item}) => <MedicineTypeItem medicineType={item} />}
        renderItem={MedicineTypeItem}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pharmacy</Text>
      <FlatList
        data={pharmacies}
        keyExtractor={(pharmacy, index) => String(index)}
        // renderItem={({item}) => <PharmacyItem pharmacy={item} />}
        renderItem={PharmacyItem}
      />

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add More Pharmacies</Text>
        </TouchableOpacity>
      </View>
      {
        <PharmacyModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddPharmacy={newPharmacy => {
            setPharmacies([...pharmacies, newPharmacy]);
            setModalVisible(false);
          }}
        />
      }
    </View>
  );
};

export default PharmacyData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b3c9f4',
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  floatingButton: {
    backgroundColor: '#000080',
    borderRadius: 30,
    padding: 15,
    width: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
