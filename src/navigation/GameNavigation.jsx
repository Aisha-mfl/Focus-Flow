import { StyleSheet, StatusBar, Image, SafeAreaView } from 'react-native';
import bgImage from '../assets/images/bgGame.jpg';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import GameScreen from '../screens/game/GameScreen';
import GameOverScreen from '../screens/game/GameOverScreen';
import StartGameScreen from '../screens/game/StartGameScreen';
import Colors from '../utils/colors';


export default function GameNavigation() {
  const [userNumber, setuserNumber] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds , setGuessRounds] = useState(0);

  const PickedNumberHandler = (PickedNumber) => {
    setuserNumber(PickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };
  const startNewGameHandler = () =>{
    setuserNumber(null);
    setGuessRounds(0);
  };


  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds}  onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <>
      <LinearGradient colors={[Colors.accent100, Colors.accent200]} style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={bgImage}
          resizeMode="cover"
        />

        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // fills entire parent
    width: '100%',
    height: '100%',
    opacity: 0.25,


  },

});
