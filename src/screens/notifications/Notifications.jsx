import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import notifee from '@notifee/react-native';

const Notifications = () => {

  async function onDisplayNotification() {
    setTimeout(async () => {
      await notifee.requestPermission();

      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      await notifee.displayNotification({
        title: 'Hello Aisha',
        body: 'Welcome to Your App!!!!!!!!!',
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onDisplayNotification}>
        <Text style={styles.buttonText}>Display Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f2f0',
    padding: 20,
  },
  button: {
    backgroundColor: '#9b5050',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
