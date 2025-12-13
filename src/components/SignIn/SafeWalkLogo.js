/**
 * SafeWalk Logo Component
 * Clean, modern logo with shield icon
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Spacing } from '../../styles/theme';

export const SafeWalkLogo = ({
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
    <View style={styles.container}>
      {/* Logo Circle */}
      <View
        style={[
          styles.logoContainer,
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
        <Text style={[styles.label, { fontSize: dimensions.label, marginTop: Spacing.sm }]}>
          SafeWalk
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
