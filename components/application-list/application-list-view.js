import React from 'react'
import { Text, SafeAreaView, FlatList, View, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import FAB from 'react-native-fab'
import { AntDesign } from '@expo/vector-icons';

import queries from './application-list-queries'
import { withNavigation } from 'react-navigation';

const ApplicationList = ({ navigation }) => {
  const { loading, error, data, refetch } = useQuery(queries.APPICAIONS_QUERY);

  const {params} = navigation.state

  if (params && params.applicationCreated) refetch()

  if (loading) return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <ActivityIndicator size="large" color="#DC143C" />
    </View>
  );
  if (error) return <Text>Error! ${error.message}</Text>

  const {allApplications} = data

  if (!allApplications) return <Text>Query does not work</Text>;

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "gray" }}>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.address}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

ApplicationList.navigationOptions = {
  title: 'Заявления',
};


export default withNavigation(ApplicationList);