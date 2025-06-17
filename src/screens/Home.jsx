import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../components/gameComponent/ui/Title';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
       
      <Image
        source={require('../assets/images/mobile-app.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
     
      <Text style={styles.title}>Welcome to Focus Flow!!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefef', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 30,
    borderRadius: 20, 
  },
  title: {
    fontSize: 24,
    color: '#9b5050',
    marginBottom: 40,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#9b5050',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3, // subtle shadow
  },
  signupButton: {
    backgroundColor: '#d97c7c', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
