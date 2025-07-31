// 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import MapsScreen from './src/GoogleMaps';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoogleMaps"
          component={MapsScreen}
          options={{ title: 'Google Maps' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { View, Text, StatusBar, useColorScheme, Pressable, Alert } from 'react-native';

// export default function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     // <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900 p-4">
//     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

//     //   <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//     //     Welcome to NativeWind!
//     //   </Text>

//     //   <Text className="text-base text-gray-700 dark:text-gray-300 mb-8 text-center">
//     //     This is a simple UI styled with Tailwind utilities in React Native.
//     //   </Text>

//     //   <Pressable
//     //     className="bg-blue-600 px-6 py-3 rounded-full"
//     //     onPress={() => Alert.alert('Button Pressed!')}
//     //   >
//     //     <Text className="text-white text-lg font-semibold">Press Me</Text>
//     //   </Pressable>
//     // </View>
//         <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900 p-4">
//           <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//           <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//             Welcome to NativeWind!
//           </Text>
//           <Text className="text-base text-gray-700 dark:text-gray-300 mb-8 text-center">
//             This is a simple UI styled with Tailwind utilities in React Native.
//           </Text>
//           <Pressable
//             className="bg-purple-500 px-6 py-3 rounded-full"
//             onPress={() =>Alert.alert('Button Pressed!')}
//           >
//             <Text className="text-white text-lg font-semibold">Go to Google Maps</Text>
//           </Pressable>
//         </View>
//   );
// }
