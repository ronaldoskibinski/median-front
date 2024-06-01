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
        <ThemedText style={styles.contentTitle}>Article Title</ThemedText>
        <ThemedText style={styles.contentDescription}>
          Article Description asdsadasdsadasdasdasdasd
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
    height: 300,
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
});
