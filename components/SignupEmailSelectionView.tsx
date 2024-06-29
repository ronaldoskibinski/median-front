import { StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { Link } from 'expo-router';
import RoundedButton, { GenericButton } from './RoundedButton';
import ContainerScrollView from '@/components/ContainerScrollView';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  stepFunction: (step: number) => void;
}>;

export default function SignupEmailSelectionView({
  stepFunction
}: Props) {
  const googleButton: GenericButton = {
    title: 'Sign up with google',
    border: true,
    function: () => {
      stepFunction(4);
    }
  }
  const facebookButton: GenericButton = {
    title: 'Sign up with facebook',
    border: true,
    function: () => {
      stepFunction(3);
    }
  }
  const emailButton: GenericButton = {
    title: 'Sign up with email',
    border: true,
    function: () => {
      stepFunction(2);
    }
  }
  
  const continueButton: GenericButton = {
    title: 'Continue',
    width: '80%',
    bgColor: '#000',
    function: () => {
      console.log("foi")
    }
  }
  
  return (
    <ContainerScrollView>
      <ThemedText centralized type="title" style={styles.title}>Join Median.</ThemedText>
      <RoundedButton button={googleButton} />
      <RoundedButton button={facebookButton} />
      <RoundedButton button={emailButton} />

      <ThemedText centralized style={styles.signup}>
        Already have an account? <Link href="login" style={styles.link}>Sign in.</Link>
      </ThemedText>

      <ThemedText centralized style={styles.terms}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      </ThemedText>
    </ContainerScrollView>
  );
}

const styles = StyleSheet.create({
  signup: {
    marginTop: '10%',
    fontSize: 16,
  },

  title: {
    marginTop: '20%',
    marginBottom: '20%',
  },

  link: {
    color: "green",
  },

  terms: {
    marginTop: '25%'
  }
});
