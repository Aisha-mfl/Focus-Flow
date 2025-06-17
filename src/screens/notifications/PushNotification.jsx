// import { Alert, StyleSheet, Text, View } from 'react-native'
// import { PermissionsAndroid } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import { useEffect } from 'react';


// const PushNotification = () => {
//     const permission = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

//     if (permission === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Permissiion granted!!!");
//     } else {
//         console.log('permission not granted!!!');

//     }

//     useEffect(() => {
//         const unsubscribe = messaging().onMessage(async remoteMessage => {
//             Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//         });

//         return unsubscribe;
//     }, []);
//     return (
//         <View>
//             <Text>PushNotification</Text>
//         </View>
//     )
// }

// export default PushNotification;

// const styles = StyleSheet.create({})