import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleService } from "@/services/article";
import { useEffect, useState } from "react";
import { Article } from "@/models/article";

export default function TabTwoScreen() {

  const articleService = new ArticleService();
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    const data = await articleService.getArticles();
    setArticles(data);
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={        
        <Image
          source={require("@/assets/images/explore.jpg")}
          style={styles.exploreBg}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore some articles</ThemedText>
      </ThemedView>
      <ThemedView>
        {
          articles.map(
            article => 
              <ArticleCard key={article.id} article={article}></ArticleCard>
          )
        }
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

  exploreBg: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
