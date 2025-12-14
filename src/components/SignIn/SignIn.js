/**
 * Sign In Component
 * Consolidated component file containing all sign-in related components
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
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../../styles/theme';

const { height } = Dimensions.get('window');

// ============================================================================
// SafeWalkLogo Component
// ============================================================================
const SafeWalkLogo = ({
  size = 'medium',
  showLabel = true,
}) => {
  const sizeMap = {
    small: { container: 48, icon: 24, label: 14 },
    medium: { container: 64, icon: 32, label: 18 },
    large: { container: 80, icon: 40, label: 24 },
  };

  const dimensions = sizeMap[size];

  return (
    <View style={logoStyles.container}>
      {/* Logo Circle */}
      <View
        style={[
          logoStyles.logoContainer,
          {
            width: dimensions.container,
            height: dimensions.container,
            borderRadius: dimensions.container / 2,
          },
        ]}
      >
        <Text style={{ fontSize: dimensions.icon }}>🛡️</Text>
      </View>
      
      {/* Label */}
      {showLabel && (
        <Text style={[logoStyles.label, { fontSize: dimensions.label, marginTop: Spacing.sm }]}>
          SafeWalk
        </Text>
      )}
    </View>
  );
};

const logoStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.lg,
  },
  logoContainer: {
    backgroundColor: Colors.primary_blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  label: {
    fontWeight: '700',
    color: Colors.text_primary,
  },
});

// ============================================================================
// InputField Component
// ============================================================================
const InputField = ({
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  isPassword = false,
  onTogglePasswordVisibility,
  showPasswordToggle = false,
  isPasswordVisible = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      <View
        style={[
          inputStyles.inputWrapper,
          isFocused && inputStyles.inputWrapperFocused,
          isFocused && Shadows.soft,
        ]}
      >
        {/* Icon */}
        <Text style={inputStyles.icon}>{icon}</Text>

        {/* Text Input */}
        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.text_secondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selectionColor={Colors.primary_blue}
        />

        {/* Password Visibility Toggle */}
        {showPasswordToggle && (
          <TouchableOpacity
            style={inputStyles.toggleButton}
            onPress={onTogglePasswordVisibility}
          >
            <Text style={inputStyles.toggleIcon}>
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.lg,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral_white,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.neutral_border,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  inputWrapperFocused: {
    borderColor: Colors.primary_blue,
    borderWidth: 1.5,
  },
  icon: {
    fontSize: 20,
    marginRight: Spacing.md,
    color: Colors.primary_blue,
  },
  input: {
    flex: 1,
    ...Typography.body,
    color: Colors.text_primary,
  },
  toggleButton: {
    padding: Spacing.sm,
    marginLeft: Spacing.sm,
  },
  toggleIcon: {
    fontSize: 18,
  },
});

// ============================================================================
// Button Component
// ============================================================================
const Button = ({
  onPress,
  label,
  variant = 'primary',
  size = 'large',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const isDisabled = disabled || loading;

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return [buttonStyles.button, buttonStyles.primaryButton, Shadows.soft];
      case 'secondary':
        return [buttonStyles.button, buttonStyles.secondaryButton, Shadows.soft];
      case 'danger':
        return [buttonStyles.button, buttonStyles.dangerButton, Shadows.soft];
      case 'outline':
        return [buttonStyles.button, buttonStyles.outlineButton];
      default:
        return [buttonStyles.button, buttonStyles.primaryButton];
    }
  };

  const getTextColor = () => {
    if (variant === 'outline') return Colors.primary_blue;
    if (variant === 'secondary') return Colors.text_primary;
    return Colors.text_light;
  };

  const getLoadingColor = () => {
    if (variant === 'secondary' || variant === 'outline') return Colors.primary_blue;
    return Colors.text_light;
  };

  return (
    <TouchableOpacity
      style={[
        getVariantStyles(),
        buttonStyles[`size_${size}`],
        fullWidth && buttonStyles.fullWidth,
        isDisabled && buttonStyles.disabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={getLoadingColor()} size="small" />
      ) : (
        <View style={buttonStyles.buttonContent}>
          {icon && iconPosition === 'left' && (
            <Text style={buttonStyles.buttonIcon}>{icon}</Text>
          )}
          <Text style={[buttonStyles.buttonText, buttonStyles[`text_${size}`], { color: getTextColor() }]}>
            {label}
          </Text>
          {icon && iconPosition === 'right' && (
            <Text style={buttonStyles.buttonIcon}>{icon}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.xl,
  },
  primaryButton: {
    backgroundColor: Colors.primary_blue,
  },
  secondaryButton: {
    backgroundColor: Colors.neutral_light,
  },
  dangerButton: {
    backgroundColor: Colors.alert_red,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.primary_blue,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 18,
    marginHorizontal: Spacing.sm,
    color: 'inherit',
  },
  buttonText: {
    // Typography styles applied via text_large, text_medium, text_small
    color: Colors.text_light,
  },
  size_large: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
  },
  size_medium: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  size_small: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  text_large: {
    ...Typography.button_large,
  },
  text_medium: {
    ...Typography.button,
  },
  text_small: {
    ...Typography.button_small,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
});

// ============================================================================
// SignIn Component (Main Component)
// ============================================================================
export const SignIn = ({ onSignIn, onForgotPassword, onRegister, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign In:', { email, password });
      if (onSignIn) {
        onSignIn({ email, password });
      }
      // Navigate to home screen if navigation is provided
      if (navigation) {
        // navigation.navigate('Home');
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
    if (onForgotPassword) {
      onForgotPassword();
    }
    // Navigate to reset password screen if navigation is provided
    if (navigation) {
      // navigation.navigate('ForgotPassword');
    }
  };

  const handleRegister = () => {
    console.log('Register');
    if (onRegister) {
      onRegister();
    }
    // Navigate to registration screen if navigation is provided
    if (navigation) {
      navigation.navigate('Register');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your SafeWalk account</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Email Input */}
            <InputField
              placeholder="Email Address"
              icon="👤"
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

            {/* Forgot Password Link */}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <Button
              label="Sign In"
              onPress={handleSignIn}
              variant="primary"
              size="large"
              loading={isLoading}
              fullWidth={true}
            />
          </View>

          {/* Footer */}
          <View style={styles.footerSection}>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerLink}>Create Account</Text>
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

  // Forgot Password
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: Spacing.lg,
    marginTop: -Spacing.md,
  },
  forgotPasswordText: {
    ...Typography.small,
    color: Colors.primary_blue,
    fontWeight: '500',
  },

  // Footer Section
  footerSection: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    ...Typography.small,
    color: Colors.text_secondary,
  },
  registerLink: {
    ...Typography.small,
    color: Colors.primary_blue,
    fontWeight: '600',
  },
});
