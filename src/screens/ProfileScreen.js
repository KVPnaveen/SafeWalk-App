/**
 * Profile Screen
 * Screen wrapper for Profile component
 */

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { PersonalInformation, ProfileSettings } from '../components/Profile';
import { Colors, Spacing } from '../styles/theme';

export const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSettingsItemPress = (item) => {
    console.log('Settings item pressed:', item);
    // Handle navigation or action for each settings item
  };

  // Mock user data - replace with actual user data from state/context
  const userData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 (555) 123-4567',
    emergencyContact: '+1 (555) 987-6543',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.background}
        translucent={false}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <PersonalInformation userData={userData} />
        <ProfileSettings
          notificationsEnabled={notificationsEnabled}
          setNotificationsEnabled={setNotificationsEnabled}
          onPressItem={handleSettingsItemPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
});


