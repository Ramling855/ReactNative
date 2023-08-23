import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './pages/FirstScreen'; // Import your screen components
import SecondScreen from './pages/SecondScreen';
import Home from "./pages/Home"
import Category from './widgets/Category';
import Feeds from './widgets/Feeds';
import Shops from './widgets/Shops';
import Checkout from './widgets/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MapScreen from './locationPages/MapScreen';
import HomeScreen from './locationPages/HomeScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Feeds" component={Feeds} />
        <Stack.Screen name="Shops" component={Shops} />
        <Stack.Screen name="Checkout" component={Checkout} />
        
        <Stack.Screen name="Footer" component={Footer} />
        
        <Stack.Screen name="Header" component={Header} />
        
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import  Home  from "./pages/Home";

// const App = () => {
//   return (
//     <View style={styles.container}>


//     <Home/>
//       {/* <LocationFinderApp /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
