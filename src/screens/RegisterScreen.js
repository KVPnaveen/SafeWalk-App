/**
 * Register Screen
 * Clean, minimal registration interface with blue theme
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeWalkLogo } from '../components/SignIn/SafeWalkLogo';
import { InputField } from '../components/SignIn/InputField';
import { Button } from '../components/SignIn/Button';
import { Colors, Spacing, BorderRadius, Typography } from '../styles/theme';

const { height } = Dimensions.get('window');

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Register:', { fullName, email, password });
      // Navigate to home screen or verification screen
      // navigation.navigate('Home');
    }, 1500);
  };

  const handleSignIn = () => {
    console.log('Navigate to Sign In');
    navigation.navigate('SignIn');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.background}
        translucent={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          scrollEnabled={height < 800}
        >
          {/* Logo Section */}
          <View style={styles.logoSection}>
            <SafeWalkLogo size="large" showLabel={true} />
          </View>

          {/* Header */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join SafeWalk to stay connected</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Full Name Input */}
            <InputField
              placeholder="Full Name"
              icon="👤"
              value={fullName}
              onChangeText={setFullName}
            />

            {/* Email Input */}
            <InputField
              placeholder="Email Address"
              icon="✉️"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {/* Password Input */}
            <InputField
              placeholder="Password"
              icon="🔒"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              showPasswordToggle={true}
              isPasswordVisible={isPasswordVisible}
              onTogglePasswordVisibility={togglePasswordVisibility}
            />

            {/* Confirm Password Input */}
            <InputField
              placeholder="Confirm Password"
              icon="🔐"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              isPassword={true}
              showPasswordToggle={true}
              isPasswordVisible={isConfirmPasswordVisible}
              onTogglePasswordVisibility={toggleConfirmPasswordVisibility}
            />

            {/* Create Account Button */}
            <Button
              label="Create Account"
              onPress={handleRegister}
              variant="primary"
              size="large"
              loading={isLoading}
              fullWidth={true}
            />
          </View>

          {/* Footer */}
          <View style={styles.footerSection}>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
  },

  // Logo Section
  logoSection: {
    alignItems: 'center',
    marginBottom: Spacing.xxxl,
  },

  // Header Section
  headerSection: {
    alignItems: 'flex-start',
    marginBottom: Spacing.xxxl,
  },
  title: {
    fontSize: Typography.h1.fontSize,
    fontWeight: '700',
    color: Colors.text_primary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.small,
    color: Colors.text_secondary,
  },

  // Form Section
  formSection: {
    marginBottom: Spacing.xxl,
  },

  // Footer Section
  footerSection: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    ...Typography.small,
    color: Colors.text_secondary,
  },
  signInLink: {
    ...Typography.small,
    color: Colors.primary_blue,
    fontWeight: '600',
  },
});
