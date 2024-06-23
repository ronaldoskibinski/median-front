import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import ContainerScrollView from '@/components/ContainerScrollView';
import RoundedButton, { GenericButton } from '@/components/RoundedButton';
import { StepNavigation, StepView } from 'react-native-step-view-navigation';
import { useState } from 'react';
import SignupEmailView from '@/components/SignupEmailView';

export default function LoginScreen() {
  const [step, setStep] = useState(1);
  const googleButton: GenericButton = {
    title: 'Sign up with google',
    border: true,
    function: () => {
      setStep(4);
    }
  }
  const facebookButton: GenericButton = {
    title: 'Sign up with facebook',
    border: true,
    function: () => {
      setStep(3);
    }
  }
  const emailButton: GenericButton = {
    title: 'Sign up with email',
    border: true,
    function: () => {
      setStep(2);
    }
  }
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView>
        <StepNavigation step={step} dots={false}>
          <StepView>
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
          </StepView>
          <StepView>
            <SignupEmailView></SignupEmailView>
          </StepView>
        </StepNavigation>
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: '20%',
    marginBottom: '20%',
  },

  signup: {
    marginTop: '10%',
    fontSize: 16,
  },

  link: {
    color: "green",
  },

  terms: {
    marginTop: '25%'
  }
});
 
