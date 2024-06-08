import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation/AppNavigator';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'article'>;

export default function ArticleScreen() {
  const route = useRoute<ArticleScreenRouteProp>();
  const { article } = route.params;
  const colorScheme = useColorScheme();
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={        
        <Image
          source={require("@/assets/images/explore.jpg")}
          style={styles.articleImg}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{article.title}</ThemedText>
        <ThemedText style={styles.createdAt}>
          Criado em: {article.createdAt.toString()}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentBody}>        
        <ThemedText style={styles.contentBody}>
          {article.body}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
 
