import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from"./Home/Home"
import Delivery from './FoodDelivery/Delivery';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //   {/* <Home /> */}
    //   <Delivery />

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#37b9ed',
    alignItems: 'center',
  },
});
