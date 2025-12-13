/**
 * Input Field Component
 * Reusable text input with icons, focus states, and password toggle
 */

import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../../styles/theme';

export const InputField = ({
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
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          isFocused && Shadows.soft,
        ]}
      >
        {/* Icon */}
        <Text style={styles.icon}>{icon}</Text>

        {/* Text Input */}
        <TextInput
          style={styles.input}
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
            style={styles.toggleButton}
            onPress={onTogglePasswordVisibility}
          >
            <Text style={styles.toggleIcon}>
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: Typography.body_lg.fontSize,
    color: Colors.text_primary,
    fontWeight: '400',
  },
  toggleButton: {
    padding: Spacing.sm,
    marginLeft: Spacing.sm,
  },
  toggleIcon: {
    fontSize: 18,
  },
});
