import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapsScreen() {
  
  return (
    <View className="flex-1">
      <MapView
        className="flex-1"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 27.671044042129285,
          longitude: 85.28435232901992,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    </View>
  );
}

// import React from 'react';
// import { View, useColorScheme } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const darkMapStyle = [
//   {
//     elementType: 'geometry',
//     stylers: [{ color: '#212121' }],
//   },
//   {
//     elementType: 'labels.icon',
//     stylers: [{ visibility: 'off' }],
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#757575' }],
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [{ color: '#212121' }],
//   },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry',
//     stylers: [{ color: '#757575' }],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [{ color: '#2e2e2e' }],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{ color: '#383838' }],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{ color: '#000000' }],
//   },
// ];

// export default function MapsScreen() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View className="flex-1 bg-white dark:bg-black">
//       <MapView
//         className="flex-1"
//         provider={PROVIDER_GOOGLE}
//         customMapStyle={isDarkMode ? darkMapStyle : []}
//         initialRegion={{
//           latitude: 27.671044042129285,
//           longitude: 85.28435232901992,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//       />
//     </View>
//   );
// }
