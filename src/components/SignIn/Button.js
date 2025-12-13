/**
 * Button Component
 * Primary, Secondary, and Danger button variants
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../../styles/theme';

export const Button = ({
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
        return [styles.button, styles.primaryButton, Shadows.soft];
      case 'secondary':
        return [styles.button, styles.secondaryButton, Shadows.soft];
      case 'danger':
        return [styles.button, styles.dangerButton, Shadows.soft];
      case 'outline':
        return [styles.button, styles.outlineButton];
      default:
        return [styles.button, styles.primaryButton];
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
        styles[`size_${size}`],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={getLoadingColor()} size="small" />
      ) : (
        <View style={styles.buttonContent}>
          {icon && iconPosition === 'left' && (
            <Text style={styles.buttonIcon}>{icon}</Text>
          )}
          <Text style={[styles.buttonText, styles[`text_${size}`], { color: getTextColor() }]}>
            {label}
          </Text>
          {icon && iconPosition === 'right' && (
            <Text style={styles.buttonIcon}>{icon}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: '500',
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
    fontSize: 16,
  },
  text_medium: {
    fontSize: 14,
  },
  text_small: {
    fontSize: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
});
