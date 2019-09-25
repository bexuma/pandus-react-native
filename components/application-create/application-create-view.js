import React, {useState} from 'react';
import { TextInput, ActivityIndicator,  SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import styles from './application-create-styles'
import mutations from './application-create-mutations'

const ApplicationCreate = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")

  const [createApplication, { loading }] = useMutation(
    mutations.APPLICATION_CREATE_MUTATION,
    {
      variables: { title, description, address },
      onCompleted: ({ createApplication: completedCreateApplication }) => {
        if (completedCreateApplication) {
          setTitle("")
          setDescription("")
          setAddress("")
          navigation.navigate("list", {applicationCreated: true})
        } else {
          console.log("error", "Could not create application");
        }
      }
    }
  );

  const disabled = () => loading || title === "" || description === "" || address === ""

  if (loading)
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}>
        <ActivityIndicator size="large" color="#DC143C" />
      </View>
    ) 

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Создать</Text>
          <TextInput
          style={styles.textInput}
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder="Заголовок..."
          />
          <TextInput
          style={styles.textInput}
            onChangeText={text => setDescription(text)}
            value={description}
            placeholder="Описание..."
          />
          <TextInput
          style={styles.textInput}
            onChangeText={text => setAddress(text)}
            value={address}
            placeholder="Адрес..."
          />
          <TouchableOpacity
            style={[styles.button, disabled() ? styles.buttonDisabled : styles.buttonEnabled]}
            onPress={createApplication}
            disabled={
              disabled()
            }
          >
          <Text  style={styles.buttonText}>Отправить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

ApplicationCreate.navigationOptions = ({navigation}) => ({
  title: 'Новое заявление',
  headerLeft: (
  <TouchableOpacity onPress={() => navigation.navigate("list")} style={{paddingLeft: 8}}>
    <MaterialIcons name="keyboard-backspace" size="28" />
  </TouchableOpacity>
  ),
})

export default withNavigation(ApplicationCreate);
