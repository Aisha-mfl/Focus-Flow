import { Pressable, StyleSheet, Text, TextBase, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { formatedDate } from '../../../utils/date';


export default function ExpenseItem({ id, description, amount, date })
 {

    const navigation = useNavigation();
    const expensePressHandler = () => {
        navigation.navigate('MangeExpense' , {
            expenseId : id
        })
    };
    return (
        <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed
        }>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.TextBase, styles.description]}> {description} </Text>
                    <Text style={styles.TextBase}> {formatedDate(date)}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.amount}> {amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        margin: 12,
        marginVertical: 20,
        backgroundColor: '#f0d6d6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        elevation: 6,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        padding: 10,
    },
    TextBase: {
        color: 'black',
        fontSize: 16,

    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    priceContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        minWidth: '30%',
    },
    amount: {
        color: '#8a4343',
        fontWeight: 'bold',
        fontSize: 16,
    },

})