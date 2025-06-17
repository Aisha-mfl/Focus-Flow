import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Fonts from '../assets/fonts';

const WelcomeScreen = ({ navigation }) => {
  const projectCards = [
    {
      title: 'Goal List Project',
      navigateTo: 'Goal',
      image: require('../assets/images/goals.jpg'),
    },
    {
      title: 'Guess Number Project',
      navigateTo: 'Game',
      image: require('../assets/images/guess.jpg'),
    },
    {
      title: 'Meals List Project',
      navigateTo: 'Meal',
      image: require('../assets/images/meals.jpg'),
    },
    {
      title: 'Expense Tracker',
      navigateTo: 'Expense',
      image: require('../assets/images/expense.jpg'),
    },
    {
      title: 'Native Device Feature',
      navigateTo: 'places',
      image: require('../assets/images/device.jpg'),
    },
     {
      title: 'Notifications',
      navigateTo: 'notification',
      image: require('../assets/images/notification.jpg'),
    },

  ];

  return (
    <View style={styles.root}>
      <Text style={styles.text}>OverAll Project Progress</Text>
      <View style={styles.gridContainer}>
        {projectCards.map((card, index) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate(card.navigateTo)}
            style={styles.cardWrapper}
          >
            <ImageBackground
              source={card.image}
              style={styles.gridItem}
              imageStyle={styles.cardImage}
            >
              <View style={styles.cardOverlay}>
                <Text style={styles.cardText}>{card.title}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 18,
    backgroundColor: '#f1e2e2',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: Fonts.Roboto.bold,
    marginBottom: 20,
    color: '#000',
  },
  gridContainer: {
    marginTop:18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '47%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 15,
    overflow: 'hidden',
  },
  gridItem: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 15,
  },
  cardOverlay: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontFamily: Fonts.Roboto.bold,
    color: '#030303',
  },
});
