import {
    TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import { useState } from 'react';
import Title from '../../components/gameComponent/ui/Title';
import InstructionText from '../../components/gameComponent/ui/InstructionText';
import PrimaryButton from '../../components/gameComponent/ui/PrimaryButton';
import Card from '../../components/gameComponent/ui/Card';
import Colors from '../../utils/colors';




const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const NumberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);

    };
    const { width, height } = useWindowDimensions;

    const ResetHandler = () => {
        setEnteredNumber('');
    };

    const ConfirmInputHandler = () => {
        const choseNumber = parseInt(enteredNumber, 10);
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a Number between 1 to 99', [{ text: 'okay', style: 'destructive', onPress: ResetHandler }]);
            return;

        }
        onPickNumber(choseNumber);

    };
    const marginTopDistance = height < 400 ? 40 : 10;
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.root, { marginTop: marginTopDistance }]}>
                    <Title style={styles.GameTitle}>Guess Number Game</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.input}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={NumberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={ResetHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={ConfirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card >
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    );


};
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 40 :  10,
        alignItems: 'center',
    },
    screen: {
        flex: 1,
    },

    input: {
        fontSize: 32,
        height: 55,
        borderBottomColor: Colors.primary300,
        borderBottomWidth: 2,
        width: 50,
        marginVertical: 10,
        textAlign: 'center',
        color: Colors.primary300,

    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,

    },
    buttonContainer: {
        flex: 1,
    },
    GameTitle: {
        color: 'white',
        backgroundColor: Colors.primary500,
        borderColor: Colors.primary600,
        marginBottom: 20,
    },

});

export default StartGameScreen;
