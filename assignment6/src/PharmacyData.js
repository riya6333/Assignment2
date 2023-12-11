import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import PharmacyModal from './modal/PharmacyModal';

const PharmacyData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const MedicineItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text style={styles.textMedicine}>{item.name}</Text>
    </View>
  );

  const MedicineTypeItem = ({item}) => (
    <View style={{padding: 8, backgroundColor: '#f0f0f0'}}>
      <Text style={styles.textType}>{item.type}</Text>
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
      <Text style={styles.textPharmacy}>{item.pName}</Text>
      <FlatList
        data={item.medicineTypes}
        keyExtractor={(type, index) => String(index)}
        renderItem={MedicineTypeItem}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PHARMACY</Text>

      <FlatList
        data={pharmacies}
        keyExtractor={(pharmacy, index) => Math.random()}
        renderItem={PharmacyItem}
        ListEmptyComponent={
          <Text style={{fontSize: 22, color: 'black'}}>
            No Record Found......
          </Text>
        }
      />

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.addMoreBtn}
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
    fontSize: 40,
    color: '#000080',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textPharmacy: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  textType: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: 'black',
  },
  textMedicine: {
    fontSize: 15,
  },
  addMoreBtn: {
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
