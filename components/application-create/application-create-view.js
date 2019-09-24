import React, {useState} from 'react';
import { TextInput, Button,  SafeAreaView } from 'react-native';
import { useMutation } from '@apollo/react-hooks';

import styles from './application-create-styles'
import mutations from './application-create-mutations'

const ApplicationCreate = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")

  const [createApplication, { loading }] = useMutation(
    mutations.APPLICATION_CREATE_MUTATION
  );

  const submitCreateApplicationForm = () => {
    createApplication({ variables: { title, description, address } });
  }

  return (

      <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.textInput}
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
        style={styles.textInput}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        <TextInput
        style={styles.textInput}
          onChangeText={text => setAddress(text)}
          value={address}
        />
        <Button
          title="Отправить"
          style={styles.button}
          onPress={submitCreateApplicationForm}
        />
      </SafeAreaView>
  );
}

export default ApplicationCreate;
