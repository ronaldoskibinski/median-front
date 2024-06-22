import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/home.jpg")}
          style={styles.homeBg}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Median!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Create your account</ThemedText>
        <ThemedText>
          <Link href="signup" style={styles.link}>Sign up now.</Link>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Explore articles that will help you increasing your knowledge.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Create</ThemedText>
        <ThemedText>
          When you're ready, create articles spreading your knowledge about
          anything you want.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  homeBg: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  link: {
    color: "green",
  },
});
