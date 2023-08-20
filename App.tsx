import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

function PickerScreen() {
  return (
    <View style={styles.container}>
      <select>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
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
