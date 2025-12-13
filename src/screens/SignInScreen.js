/**
 * Sign In Screen
 * Screen wrapper for Sign In component
 */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SignIn } from '../components/SignIn';

export const SignInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = (credentials) => {
    console.log('Sign In successful:', credentials);
    // Handle sign in logic here
    // Navigate to Profile after successful sign in
    navigation.navigate('Profile');
  };

  const handleForgotPassword = () => {
    console.log('Navigate to Forgot Password');
    // navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    console.log('Navigate to Register');
    navigation.navigate('Register');
  };

  return (
    <SignIn
      navigation={navigation}
      onSignIn={handleSignIn}
      onForgotPassword={handleForgotPassword}
      onRegister={handleRegister}
    />
  );
};
