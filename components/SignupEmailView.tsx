import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import RoundedButton, { GenericButton } from './RoundedButton';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  stepFunction: (step: number) => undefined;
}>;


export default function SignupEmailView({
  stepFunction
}: Props) {

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
      <View style={styles.viewEmail}>
        <ThemedText centralized style={styles.title}>Your email</ThemedText>
        <TextInput style={styles.input}></TextInput>
      </View>
      <RoundedButton button={continueButton}></RoundedButton>
      <Pressable onPress={() => stepFunction(1)}>
        <ThemedText centralized style={styles.signupOptions}>
          { '< All sign up options' }
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 62,
  },

  title: {
    textAlign: 'center',
    color: 'white'
  },

  viewEmail: {
    width: '100%',
    marginTop: '20%', 
    marginBottom: '15%'
  },

  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 4
  },

  button: {
    margin: 0 
  },
  
  signupOptions: {
    marginTop: '20%',
    fontSize: 16,
    color: "green",
  },
});
