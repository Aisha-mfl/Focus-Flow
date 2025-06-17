import { Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Title from '../../components/gameComponent/ui/Title';
import gameover from '../../assets/images/gameOver.jpg';
import Fonts from '../../assets/fonts';
import Colors from '../../utils/colors';
import PrimaryButton from '../../components/gameComponent/ui/PrimaryButton';

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();
  let ImageSize = 300;

  if (width < 300) {
    ImageSize = 150;
  }
  if (height < 400) {
    ImageSize = 80;
  }
  const imageStyle =
  {
    width: ImageSize,
    height: ImageSize,
    borderRadius: ImageSize / 2,
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>Game Over!!!</Title>
        <View style={[styles.imageContainer,imageStyle]}>
          <Image style={styles.image} source={gameover} />
        </View>

        <Text style={styles.summaryText}>
          Your Phone needed <Text style={styles.highLight}>{roundsNumber}</Text>{' '}
          rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    margin: 35,
    opacity: 0.85,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: Fonts.Roboto.light,
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highLight: {
    fontFamily: Fonts.Roboto.bold,
    color: Colors.primary500,
  },
});
