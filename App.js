import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from"./Home/Home"
import Delivery from './FoodDelivery/Delivery';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Delivery />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#37b9ed',
    alignItems: 'center',
  },
});
