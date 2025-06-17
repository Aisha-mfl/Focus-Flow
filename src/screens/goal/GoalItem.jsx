
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>

            <Pressable android_ripple={{ color: '#3674B5' }} onPress={props.onDelete.bind(this, props.id)}>
                <Text style={styles.goalText}> {props.text}</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        margin: 8,
        backgroundColor: '#9EC6F3',

    },
    goalText: {
        fontSize: 16,
        padding: 8,
    },

});
export default GoalItem;
