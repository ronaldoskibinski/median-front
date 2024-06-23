import { StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import RoundedButton, { GenericButton } from './RoundedButton';

export default function SignupEmailView() {
  
  const continueButton: GenericButton = {
    title: 'Continue',
    width: '80%',
    bgColor: '#000',
    function: () => {
      console.log("foi")
    }
  }
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText centralized type="title" style={styles.title}>Sign in with email</ThemedText>
      <View style={{marginTop: '20%', marginBottom: '10%'}}>
        <ThemedText centralized style={styles.title}>Your email</ThemedText>
        <TextInput style={styles.input}></TextInput>
      </View>
      <RoundedButton button={continueButton}></RoundedButton>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },

  title: {
    textAlign: 'center',
    color: 'white'
  },

  input: {
    height: 40,
    margin: 12,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 4,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,      
    }
  },
});
