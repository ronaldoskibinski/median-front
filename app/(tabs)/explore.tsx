import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleService } from "@/services/article";
import { useEffect } from "react";

export default function TabTwoScreen() {

  const articleService = new ArticleService();

  const getArticles = async () => {
    const data = await articleService.getArticles();
    console.log(data);
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore some articles</ThemedText>
      </ThemedView>
      <ThemedView>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  articlesContainer: {
    flexDirection: "row",
  },
});
