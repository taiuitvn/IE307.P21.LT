import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AppScreenProps } from '../navigation/types';

const placeholderAvatar = require('../assets/images/avatar.png');

const SignUpScreen: React.FC<AppScreenProps<'SignUp'>> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create new account</Text>

        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={placeholderAvatar} style={styles.avatar} />
        </TouchableOpacity>

        <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Phone Number (e.g. +1...)"
          value={phone}
          setValue={setPhone}
          keyboardType="phone-pad"
        />

        <CustomButton text="Send code" onPress={() => console.log('Send Code')} />

        <Text style={styles.terms}>
          By creating an account you agree with our{' '}
          <Text style={styles.termsLink}>Terms of Use</Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>
            Already have an account?{' '}
            <Text style={styles.termsLink}>Sign In</Text>
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
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  terms: {
    color: '#a9a9a9',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  termsLink: {
    color: '#8A2BE2',
    fontWeight: 'bold',
  },
  signInLink: {
    color: '#a9a9a9',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignUpScreen;