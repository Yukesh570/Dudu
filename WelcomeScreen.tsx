import React from 'react';
import { View, Text, Pressable, StatusBar, useColorScheme } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900 p-4">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome to NativeWind!
      </Text>
      <Text className="text-base text-gray-700 dark:text-gray-300 mb-8 text-center">
        This is a simple UI styled with Tailwind utilities in React Native.
      </Text>
      <Pressable
        className="bg-purple-500 px-6 py-3 rounded-full"
        onPress={() => navigation.navigate('GoogleMaps')}
      >
        <Text className="text-white text-lg font-semibold">Go to Google Maps</Text>
      </Pressable>
    </View>
  );
}
