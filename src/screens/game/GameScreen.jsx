import { Alert, FlatList, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import Number from '../../components/gameComponent/game/Number';
import InstructionText from '../../components/gameComponent/ui/InstructionText';
import PrimaryButton from '../../components/gameComponent/ui/PrimaryButton';
import GuessLogs from '../../components/gameComponent/game/GuessLogs';
import Fonts from '../../assets/fonts';
import Colors from '../../utils/colors';
import Title from '../../components/gameComponent/ui/Title';
import Entypo from '@react-native-vector-icons/entypo';


const RandomNumber = (min, max, exclude) => {
    const rnNo = Math.floor(Math.random() * (max - min)) + min;

    if (rnNo === exclude) {
        return RandomNumber(min, max, exclude);
    } else {
        return rnNo;
    }
};
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = RandomNumber(1, 100, userNumber);
    const [currguess, setCurrguess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currguess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currguess, userNumber, onGameOver, guessRounds]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    //direction => 'lower' , 'greater'

    const nextGuess = direction => {
        if (
            (direction === 'lower' && currguess < userNumber) ||
            (direction === 'greater' && currguess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'you know that this is wrong...', [
                { text: 'sorry!!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currguess;
        } else {
            minBoundary = currguess + 1;
        }
        console.log(minBoundary, maxBoundary);

        const newRndNumber = RandomNumber(minBoundary, maxBoundary, currguess);
        setCurrguess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    };
    const guessRound = guessRounds.length;

    let content = (
        <>
            <Number>{currguess}</Number>
            <View>
                <InstructionText style={styles.text}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>
                            <Entypo name="minus" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'greater')}>
                            <Entypo name="plus" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>
            </View>
        </>
    );
    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerwide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>
                            <Entypo name="minus" size={24} color="black" />
                        </PrimaryButton>
                    </View>

                    <Number>{currguess}</Number>;
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'greater')}>
                            <Entypo name="plus" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guessss!!</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (<GuessLogs roundNumber={itemData.index} guess={itemData.item}
                    />
                    )}
                    keyExtractor={(item) => item}
                />


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: Fonts.Roboto.bold,
        color: Colors.primary500,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,

    },
    buttonContainer: {
        flex: 1,
        // fontSize: 30,
        margin: 2,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary500,
        borderRadius: 30,

    },
    buttonsContainerwide: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    listContainer: {
        flex: 1,
        padding: 1,
    },
});
