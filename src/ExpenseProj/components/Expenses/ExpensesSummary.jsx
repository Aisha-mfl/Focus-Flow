import { StyleSheet, Text, View } from 'react-native'

export default function ExpensesSummary({ expenses, periodName }) {
    const ExpensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{periodName}</Text>
            <Text  style={styles.sum}>Rs: {ExpensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding:20,
        backgroundColor:'#ffffff',
        borderRadius:16,
        marginVertical:2,
        elevation:13,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    text:{
        fontSize:17,
        color:'#8a4343',
        fontWeight:'bold'
    },
    sum:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    }
})