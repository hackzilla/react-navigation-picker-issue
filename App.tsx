import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

function PickerScreen() {
  return (
    <View style={styles.container}>
      <Picker>
        <Picker.Item
          label={'One'}
          value={1}
        /> 
        <Picker.Item
          label={'Two'}
          value={2}
        />   
        <Picker.Item
          label={'Three'}
          value={3}
        />
      </Picker>
    </View>
  );
}

const Drawer = createDrawerNavigator()
// const Drawer = createNativeStackNavigator()

export default function App() {
  // return <PickerScreen/>
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Picker"
          component={PickerScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
