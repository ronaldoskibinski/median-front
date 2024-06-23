import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import ContainerScrollView from '@/components/ContainerScrollView';
import RoundedButton from '@/components/RoundedButton';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView>
      <ContainerScrollView>
        <ThemedText centralized type="title" style={styles.title}>Join Median.</ThemedText>

        <RoundedButton>Sign up with google</RoundedButton>
        <RoundedButton>Sign up with facebook</RoundedButton>
        <RoundedButton>Sign up with email</RoundedButton>

        <ThemedText centralized style={styles.signup}>
          Already have an account? <Link href="login" style={styles.link}>Sign in.</Link>
        </ThemedText>

        <ThemedText centralized style={styles.terms}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        </ThemedText>
      </ContainerScrollView>
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
 
