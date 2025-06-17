import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const UserScreen = ({ navigation }) => {
  const username = useSelector(state => state.auth.username);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/code.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome {username}!!!</Text>


    </View>
  )
}

export default UserScreen;

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
});