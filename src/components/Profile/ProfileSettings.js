import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../../styles/theme';

export const ProfileSettings = ({
  notificationsEnabled,
  setNotificationsEnabled,
  onPressItem,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Settings</Text>

      {/* Notifications */}
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
        onPress={() => setNotificationsEnabled(!notificationsEnabled)}
      >
        <RowLeft icon="🔔" label="Notifications" />
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: Colors.neutral_border, true: Colors.primary_blue }}
          thumbColor={Colors.neutral_white}
        />
      </TouchableOpacity>

      <SettingsItem icon="🔒" label="Privacy & Security" onPress={() => onPressItem('Privacy')} />
      <SettingsItem icon="🎨" label="App Theme" onPress={() => onPressItem('Theme')} />
      <SettingsItem
        icon="❓"
        label="Help & Support"
        onPress={() => onPressItem('Help')}
        last
      />
    </View>
  );
};

const RowLeft = ({ icon, label }) => (
  <View style={styles.rowLeft}>
    <View style={styles.iconContainer}>
      <Text style={styles.icon}>{icon}</Text>
    </View>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const SettingsItem = ({ icon, label, onPress, last }) => (
  <TouchableOpacity
    style={[styles.row, last && styles.lastRow]}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <RowLeft icon={icon} label={label} />
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.md,
  },
  title: {
    fontSize: Typography.h2.fontSize,
    fontWeight: '600',
    color: Colors.text_primary,
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.neutral_white,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.sm,
    ...Shadows.soft,
  },
  lastRow: {
    marginBottom: 0,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surface_light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  icon: {
    fontSize: 18,
  },
  label: {
    ...Typography.small,
    color: Colors.text_primary,
    fontWeight: '500',
  },
  chevron: {
    fontSize: 24,
    color: Colors.text_secondary,
  },
});
