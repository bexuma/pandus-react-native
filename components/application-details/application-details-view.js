import React, {useState} from 'react';
import { TextInput, ActivityIndicator,  SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

const ApplicationDetails = ({ navigation }) => {
  const application = navigation.getParam("application", {});

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

ApplicationDetails.navigationOptions = ({ navigation }) => ({
  title: 'Детали',
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.navigate("list")} style={{paddingLeft: 8}}>
      <MaterialIcons name="keyboard-backspace" size="28" />
    </TouchableOpacity>
    ),
})

export default withNavigation(ApplicationDetails);
