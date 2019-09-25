import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
    // justifyContent: 'center'
  },
  header: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24
  },
  textInput: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16
  },
  button: {
    
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  buttonDisabled: {
backgroundColor: "#8D0D26"
  },
  buttonEnabled: {
    backgroundColor: '#DC143C',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white'
  },
  formContainer: {
    paddingTop: 70
  }
});

export default styles