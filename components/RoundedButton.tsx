import type { PropsWithChildren } from 'react';
import { DimensionValue, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

export interface GenericButton {
  width?: DimensionValue,
  title: string,
  border?: boolean,
  bgColor?: string,
  function: () => void
}

type Props = PropsWithChildren<{
  button: GenericButton;
}>;

export default function RoundedButton({
  children,
  button,
}: Props) {

  return (
    <Pressable style={[styles.rounded, { width: button.width ? button.width : '100%', 
                                          backgroundColor: button.bgColor, 
                                          borderWidth: button.border ? 1 : 0 }]} onPress={button.function}>
      <ThemedText style={styles.text}>{button.title}</ThemedText>
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
