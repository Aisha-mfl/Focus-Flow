import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import { ExpenseContext } from '../store/Expense-Context';
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '../components/ui/IconButton';
import { deleteExpense, updateExpenses ,storeExpense } from '../../utils/http';
import Error from '../components/ui/Error';
import Loading from '../components/ui/Loading';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { addExpense, removeExpense, updateExpense } from '../../store/Expense-store';

export default function ManageExpense({ route, navigation }) {
    const [IsGetting, setGetting] = useState(false);
    const [isError, setisError] = useState();
    // const expenseCtx = useContext(ExpenseContext);
    const expensesRedux = useSelector(state => state.expensesReducer.ids);
    const dispatch = useDispatch();
    const editedExpenseId = route.params?.expenseId;
    console.log(editedExpenseId, 'ids');

    const selectedExpense = expensesRedux.find(
        expense => expense.id === editedExpenseId,
    );

    // value !! convert in boolean
    const isEditing = !!editedExpenseId;
    console.log('edit', isEditing);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    const DeleteExpense = async () => {
        setGetting(true);
        try {
            await deleteExpense(editedExpenseId);
            dispatch(removeExpense(editedExpenseId));
            navigation.goBack();
        } catch (error) {
            setisError('could not delete!');
            setGetting(false);
        }
    };

    const CancelExpense = () => {
        navigation.goBack();
    };

    const ConfirmExpense = async expenseData => {
        setGetting(true);
        try {
            if (isEditing) {
                dispatch(updateExpense(editedExpenseId, expenseData));
                await updateExpenses(editedExpenseId, expenseData);
            } else {
                const id = await storeExpense(expenseData);
                dispatch(addExpense({ ...expenseData, id: id }));
            }
            navigation.goBack();
        }
        catch (error) {
            setisError('could not add or update expense!');
            setGetting(false);
        }
    };

    if (IsGetting) {
        return <Loading />;
    }

    const errorhandler = () => {
        setisError(null);
    };

    if (isError && !IsGetting) {
        return <Error messege={isError} onConfirm={errorhandler} />;
    }

    return (
        <View style={styles.container}>
            <ExpenseForm
                onCancel={CancelExpense}
                onSubmit={ConfirmExpense}
                SubmitButtonLabel={isEditing ? 'Update' : 'Add'}
                defaultValues={selectedExpense}
            />
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color="red"
                        size={36}
                        onPress={DeleteExpense}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffefef',
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },
});
