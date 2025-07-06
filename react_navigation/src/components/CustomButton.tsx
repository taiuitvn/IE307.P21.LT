import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

type ButtonType = 'PRIMARY' | 'SECONDARY';

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  type?: ButtonType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  type = 'PRIMARY',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
  container_PRIMARY: ViewStyle;
  container_SECONDARY: ViewStyle;
  text: TextStyle;
  text_PRIMARY: TextStyle;
  text_SECONDARY: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  container_PRIMARY: {
    backgroundColor: '#8A2BE2',
  },
  container_SECONDARY: {
    borderColor: '#8A2BE2',
    borderWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_PRIMARY: {
    color: 'white',
  },
  text_SECONDARY: {
    color: '#8A2BE2',
  },
});

export default CustomButton;