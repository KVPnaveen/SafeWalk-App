import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../../styles/theme';

export const PersonalInformation = ({ userData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Personal Information</Text>

      <InfoRow icon="👤" label="Full Name" value={userData.fullName} />
      <InfoRow icon="✉️" label="Email" value={userData.email} />
      <InfoRow icon="📱" label="Phone Number" value={userData.phoneNumber} />
      <InfoRow
        icon="🚨"
        label="Emergency Contact"
        value={userData.emergencyContact}
        last
      />
    </View>
  );
};

const InfoRow = ({ icon, label, value, last }) => (
  <View style={[styles.infoRow, last && styles.lastInfoRow]}>
    <View style={styles.infoIconContainer}>
      <Text style={styles.infoIcon}>{icon}</Text>
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.neutral_white,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    ...Shadows.soft,
  },
  cardTitle: {
    fontSize: Typography.h2.fontSize,
    fontWeight: '600',
    color: Colors.text_primary,
    marginBottom: Spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  lastInfoRow: {
    marginBottom: 0,
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surface_light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  infoIcon: {
    fontSize: 20,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: Typography.body_sm.fontSize,
    color: Colors.text_secondary,
    fontWeight: '500',
    marginBottom: Spacing.xs,
  },
  infoValue: {
    fontSize: Typography.body_md.fontSize,
    color: Colors.text_primary,
  },
});
