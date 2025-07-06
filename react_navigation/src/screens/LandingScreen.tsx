import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AppScreenProps } from '../navigation/types';

const rocketIcon = require('../assets/images/rocket.png');

const LandingScreen: React.FC<AppScreenProps<'Landing'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Image source={rocketIcon} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Instamobile</Text>
        <Text style={styles.subtitle}>
          Use this codebase to start a new Firebase mobile app in minutes.
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Log In"
            onPress={() => navigation.navigate('SignIn')}
          />
          <CustomButton
            text="Sign Up"
            type="SECONDARY"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#8A2BE2',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a9a9a9',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '90%',
  },
});

export default LandingScreen;