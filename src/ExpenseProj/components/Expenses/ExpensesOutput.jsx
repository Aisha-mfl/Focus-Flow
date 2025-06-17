import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'



export default function ExpensesOutput({ expenses, expensesPeriod, fallback }) {
    let content = <Text style={styles.infoText}>{fallback}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.root}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fcf6f6',
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
    },
    infoText: {
        color: '#8a4343',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 32,
        marginHorizontal: 20,
        alignItems: 'center',

    }

})