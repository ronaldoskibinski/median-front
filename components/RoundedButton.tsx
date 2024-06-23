import type { PropsWithChildren } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

type Props = PropsWithChildren;

export default function RoundedButton({
  children,
}: Props) {

  return (
    <Pressable style={styles.rounded}>
      <ThemedText style={styles.text}>{children}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: 'white'
  },

  text: {
    textAlign: 'center',
    color: 'white'
  }
});
