import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>HomeScreen</Text>
    </View>
    )
}

function DetailScreen(){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>DetailScreen</Text>
    </View>
    )
}

const Stack=createNativeStackNavigator();

function StackNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackNavigation;