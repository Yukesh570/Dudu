import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const destination = {
  latitude: 27.671044042129285,
  longitude: 85.28435232901992,
};

export default function MapsScreen() {
  const mapRef = useRef<MapView | null>(null);
  const [markersList, setMarkersList] = useState([
    {
      latitude: 27.671044042129285,
      longitude: 85.28435232901992,
      title: 'hi',
      description: 'Your chosen location',
    },
    {
      latitude: 27.672165244467173,
      longitude: 85.31119587711933,
      title: 'Zoo',
      description: 'Your chosen location',
    },
  ]);

  const MyCustomCallOut = () => (
    <View>
      <Text>Driver</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Autocomplete positioned absolutely on top */}
      <View style={{ position: 'absolute', top: 10, width: '100%', zIndex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          fetchDetails={true}
          debounce={200}
          enablePoweredByContainer={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          timeout={10000}
          keyboardShouldPersistTaps="handled"
          listViewDisplayed="auto"
          keepResultsAfterBlur={false}
          currentLocation={false}
          currentLocationLabel="Current location"
          enableHighAccuracyLocation={true}
          onFail={() => console.warn('Google Places Autocomplete failed')}
          onNotFound={() => console.log('No results found')}
          onTimeout={() => console.warn('Google Places request timeout')}
          predefinedPlaces={[]}
          predefinedPlacesAlwaysVisible={false}
          styles={{
            textInputContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginHorizontal: 20,
              shadowColor: '#d4d4d4',
            },
            textInput: {
              backgroundColor: 'white',
              fontWeight: '600',
              fontSize: 16,
              marginTop: 5,
              width: '100%',
              color: '#000',
              paddingHorizontal: 10,
            },
            listView: {
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#d4d4d4',
            },
          }}
          query={{
            key: 'AIzaSyB8Pg3Bm6cqXX_oeQN3HHQdRaU2YRPX5oU',
            language: 'en',
            types: 'geocode',
          }}
          onPress={(data, details = null) => {
            if (!details?.geometry?.location) {
              console.warn('Missing geometry details!');
              return;
            }

            const location = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              // Prefer formatted_address or name for title/description
              address:
                details.formatted_address ||
                details.name ||
                data.description ||
                'Unknown location',
            };

            setMarkersList(prev => [
              ...prev,
              {
                latitude: location.latitude,
                longitude: location.longitude,
                title: location.address,
                description: 'Selected location',
              },
            ]);

            mapRef.current?.animateToRegion({
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          }}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            radius: 1000,
          }}
          textInputProps={{
            placeholderTextColor: 'gray',
          }}
        />
      </View>

      {/* Map takes full space */}
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: destination.latitude,
          longitude: destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          draggable
          coordinate={{ latitude: 27.6823, longitude: 85.3202 }}
          image={require('../assets/icons/car.png')}
          onDragEnd={e => console.log({ x: e.nativeEvent.coordinate })}
        >
          <Callout>
            <MyCustomCallOut />
          </Callout>
        </Marker>

        {markersList.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}
