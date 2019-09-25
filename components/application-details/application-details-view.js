import React, {useState} from 'react';
import { TextInput, ActivityIndicator,  SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';

const ApplicationDetails = ({ navigation }) => {
  const application = navigation.getParam("application", {});
  console.log(application);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: application.latitude,
          longitude: application.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: application.latitude,
            longitude: application.longitude
          }}
          title={application.title}
          description={application.description}
        />
      </MapView>
      <View style={{ flex: 1, padding: 10, borderTopWidth: 1, borderTopColor: "gray" }}>
        <Text style={{ fontWeight: "bold" }}>{application.title}</Text>
        <Text>Описание: {application.description}</Text>
        <Text>Адрес: {application.address}</Text>
      </View>
    </SafeAreaView>
  );
}

export default withNavigation(ApplicationDetails);
