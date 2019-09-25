import React from 'react'
import { Text, SafeAreaView, FlatList, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import FAB from 'react-native-fab'
import { AntDesign } from '@expo/vector-icons';

import queries from './application-list-queries'
import { withNavigation } from 'react-navigation';

const ApplicationList = ({ navigation }) => {
  const { loading, error, data } = useQuery(queries.APPICAIONS_QUERY);

  if (loading) return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
  if (error) return <Text>Error! ${error.message}</Text>

  const {allApplications} = data

  if (!allApplications) return <Text>Query does not work</Text>;

  console.log("allApplications", allApplications) 

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "gray" }}>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.address}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ borderBottomWidth: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, padding: 10 }}>Все Заявления</Text>
      </View>
      <FlatList 
        data={allApplications}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        buttonColor="red"
        iconTextColor="#FFFFFF"
        onClickAction={() => navigation.navigate("create")}
        visible
        iconTextComponent={<AntDesign name="plus" size={20}/>}
      />
    </SafeAreaView>
  )
}

export default withNavigation(ApplicationList);