import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
import { useState } from 'react';
import goalImage from '../../assets/images/goal.jpg';

const GoalInput = (props) => {
    const [enterGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enterText) {
        setEnteredGoalText(enterText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enterGoalText);
        setEnteredGoalText('');
    };
    console.log(enterGoalText);

    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>

                <Image style={styles.image}
                    source={goalImage} />
                <TextInput
                    style={styles.textInput}
                    placeholder="your course goal"
                    onChangeText={goalInputHandler}
                    value={enterGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button title="Add goal" onPress={addGoalHandler} color="#102E50" />
                    </View>
                    <View style={styles.Button}>
                        <Button title="cancel" onPress={props.onCancel} color="#102E50" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 16,
        borderBottomColor: 'black',

    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        width: '90%',
        padding: 13,
        borderRadius: 17,
        borderBottomColor: '#102E50',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 60,
        borderRadius: 12,
        borderColor: '#102E50',


    },
    Button: {
        width: '30%',
        marginHorizontal: 8,



    },
    image: {
        maxWidth: '90%',
        maxHeight: '50%',
        margin: 20,
    },

});
export default GoalInput;
