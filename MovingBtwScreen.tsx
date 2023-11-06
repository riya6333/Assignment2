import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>HomeScreen</Text>
        <Button title="go to details" 
        onPress={() => navigation.navigate('Detail')}/>
    </View>
    )
}



function DetailScreen({navigation}){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>DetailScreen</Text>
        <Button title="go to last" 
        onPress={() => navigation.push('Last')}/>
    </View>
    )
}

function LastScreen({navigation}){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>LastScreen</Text>
        <Button title="go to last again" 
        onPress={() => navigation.push('Last')}/>


{/* for coming to home screen */}
        <Button title="go to Home" 
        onPress={() => navigation.navigate('Home')}/>
{/* for coming to detail screen */}        
        <Button title="go to back" 
        onPress={() => navigation.goBack()}/>

        <Button title="go to back" 
        onPress={() => navigation.popToTop()}/>

    </View>
    )
}



const Stack=createNativeStackNavigator();

function MovingBtwScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Last" component={LastScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MovingBtwScreen;