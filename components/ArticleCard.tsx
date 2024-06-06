import {
  Image,
  StyleSheet,
  TouchableOpacity,
  type ViewProps,
} from "react-native";
import Icon from "./../assets/images/adaptive-icon.png";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Article } from "@/models/article";

export type ArticleCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  article: Article;
};

export function ArticleCard({
  article,
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ArticleCardProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ThemedView style={styles.cardImageContainer}>
        <Image style={styles.image} source={Icon} />
      </ThemedView>
      <ThemedView style={styles.cardContentContainer}>
        <ThemedText style={styles.contentTitle}>{article.title}</ThemedText>
        <ThemedText style={styles.contentDescription}>
        {article.description}
        </ThemedText>
        <ThemedText style={styles.updatedAt}>
        Atualizado em: {article.updatedAt.toString()}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    height: 350,
  },

  cardImageContainer: {
    width: "100%",
    height: "50%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  cardContentContainer: {
    width: "100%",
    height: 130,
    position: "relative",
    marginTop: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },

  contentTitle: {
    fontWeight: "bold",
  },

  contentDescription: {
    textAlign: "justify",
  },

  updatedAt: {
    position: "absolute",
    bottom: 0,
    fontSize: 8,
  }
});
