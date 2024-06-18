import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/home'
import Progate from './screens/progate'
import Contact from './screens/contact'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Progate" component={Progate} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// ---With drawer Navigator---

// import React from 'react'
// import { View, Text, Button, StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.marginBottom20}>Home Screen</Text>
//       <Button
//         style={styles.button}
//         title="Pergi ke Progate"
//         onPress={() => {
//           navigation.navigate('Progate')
//         }}
//       />
//     </View>
//   )
// }

// const ProgateScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Progate</Text>
//       <Text style={styles.marginBottom20}>Ayo belajar!</Text>
//       <Button title="Kembali" onPress={() => navigation.goBack()} />
//     </View>
//   )
// }

// const Drawer = createDrawerNavigator()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Progate" component={ProgateScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   marginBottom20: {
//     marginBottom: 20,
//   },
// })

// export default App

// ---With Bottom Tab Navigator---

// import React from 'react'
// import { View, Text, Button, Image, StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import HomeIcon from './assets/bottomTabIcons/home.png'
// import UserIcon from './assets/bottomTabIcons/user.png'

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.marginBottom20}>Home Screen</Text>
//       <Button
//         style={styles.button}
//         title="Pergi ke Progate"
//         onPress={() => {
//           navigation.navigate('Progate')
//         }}
//       />
//     </View>
//   )
// }

// const ProgateScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Progate</Text>
//       <Text style={styles.marginBottom20}>Ayo belajar!</Text>
//       <Button title="Kembali" onPress={() => navigation.goBack()} />
//     </View>
//   )
// }

// const Tab = createBottomTabNavigator()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: () => (
//               <Image source={HomeIcon} style={styles.homeIcon} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Progate"
//           component={ProgateScreen}
//           options={{
//             tabBarLabel: 'Progate',
//             tabBarIcon: () => (
//               <Image source={UserIcon} style={styles.progateIcon} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   marginBottom20: {
//     marginBottom: 20,
//   },
//   homeIcon: {
//     width: 20,
//     height: 20,
//   },
//   progateIcon: {
//     width: 20,
//     height: 20,
//   },
// })

// export default App

// ---With Stack Homescreen---

// import React from 'react'
// import { View, Text, StyleSheet, Button } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Progate"
//         onPress={() => navigation.navigate('Progate', {
//           name: 'Ninja Ken',
//           language: 'React Native',
//         })}
//       />
//     </View>
//   )
// }

// // Tambahkan ProgateScreen
// const ProgateScreen = ({route, navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Progate! {route.params.name}</Text>
//       <Text>Ayo belajar {route.params.language}</Text>
//       <Button 
//         title="Go back" 
//         onPress={() => navigation.goBack()} />
//     </View>
//   )
// }

// const Stack = createNativeStackNavigator()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen 
//           name="Progate" 
//           component={ProgateScreen}
//           options={{ 
//             title: 'Progate',
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

// export default App