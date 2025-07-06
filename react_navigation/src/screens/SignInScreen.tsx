import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AppScreenProps } from '../navigation/types';

const SignInScreen: React.FC<AppScreenProps<'SignIn'>> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <CustomInput
          placeholder="E-mail"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => console.warn('Forgot Password!')}>
          <Text style={styles.linkRight}>Forgot password?</Text>
        </TouchableOpacity>

        <CustomButton text="Log In" onPress={() => navigation.navigate('Product')} />

        <Text style={styles.orText}>OR</Text>

        {/* Các nút social login sẽ được thêm ở đây */}
        
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkCenter}>
            Don't have an account? <Text style={styles.linkBold}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  linkRight: {
    color: '#a9a9a9',
    marginVertical: 10,
    textAlign: 'right',
  },
  linkCenter: {
    color: '#a9a9a9',
    textAlign: 'center',
    marginTop: 20,
  },
  linkBold: {
    color: '#8A2BE2',
    fontWeight: 'bold',
  },
  orText: {
    color: '#a9a9a9',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default SignInScreen;