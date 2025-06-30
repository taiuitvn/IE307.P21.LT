import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#a9a9a9"
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2E',
    width: '100%',
    borderColor: '#3A3A3C',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 55,
    justifyContent: 'center',
  },
  input: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomInput;