import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sign in with email</ThemedText>
        {/* <ThemedText style={styles.createdAt}>
          Criado em: {article.createdAt.toString()}
        </ThemedText> */}
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  articleImg: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  titleContainer: {
    flexDirection: "column",
    gap: 4,
    marginBottom: 6
  },

  createdAt: {
    fontSize: 8,
  },

  contentBody: {
    flexDirection: "column",
  },
});
 
