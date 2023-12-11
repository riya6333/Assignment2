import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => SplashScreen.hide());

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text style={styles.text}>API CALLING</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.input}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 35,
    color: 'black',
  },
  input: {
    alignSelf: 'center',
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 20,
    color: 'teal',
  },
});
