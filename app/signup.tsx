import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import ContainerScrollView from '@/components/ContainerScrollView';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView>
      <ContainerScrollView>
        <ThemedText centralized type="title">Join Median.</ThemedText>
        <ThemedText centralized style={styles.signup}>
          Already have an account? <Link href="login" style={styles.link}>Sign in.</Link>
        </ThemedText>
      </ContainerScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 4,
    marginBottom: 6
  },

  signup: {
    fontSize: 16,
  },

  link: {
    color: "green",
  },
});
 
