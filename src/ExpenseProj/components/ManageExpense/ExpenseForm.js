import {Alert, StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Input from './Input';
import Button from '../ui/Button';
import { formatedDate } from '../../../utils/date';

const ExpenseForm = ({
  onCancel,
  SubmitButtonLabel,
  onSubmit,
  defaultValues,
}) => {
  const [Inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? formatedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description.toString() : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs(currInputs => {
      return {
        ...currInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      //+ converts the string into number
      amount: +Inputs.amount.value,
      date: new Date(Inputs.date.value),
      description: Inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const DateisValid = expenseData.date.toString() !== 'Invalid Date';
    const DesIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !DateisValid || !DesIsValid) {
      // Alert.alert('Invalid Input', 'please check yout input');
      setInputs(currInputs => {
        return {
          amount: {value: currInputs.amount.value, isValid: amountIsValid},
          date: {value: currInputs.date.value, isValid: DateisValid},
          description: {
            value: currInputs.description.value,
            isValid: DesIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const FormIsInvalid =
    !Inputs.amount.isValid ||
    !Inputs.date.isValid ||
    !Inputs.description.isValid;

  return (
    <View style={styles.form}>
      <ScrollView>
        <Text style={styles.text}>Your Expense</Text>
        <View style={styles.inputRow}>
          <Input
            style={styles.rowInput}
            label="Amount"
            invalid={!Inputs.amount.isValid}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: inputChangeHandler.bind(this, 'amount'),
              value: Inputs.amount.value,
            }}
          />
          <Input
            style={styles.rowInput}
            label="Date"
            invalid={!Inputs.date.isValid}
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              keyboardType: 'decimal-pad',
              onChangeText: inputChangeHandler.bind(this, 'date'),
              value: Inputs.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          invalid={!Inputs.description.isValid}
          textInputConfig={{
            multiline: true,
            autoCorrect: false,
            autoCapitailize: 'sentence',
            onChangeText: inputChangeHandler.bind(this, 'description'),
            value: Inputs.description.value,
          }}
        />
        {FormIsInvalid && (
          <Text style={styles.errorText}>Invalid input values - Please check your enetered data!</Text>
        )}
        <View style={styles.buttons}>
          <Button style={styles.button} mode="flat" onPress={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {SubmitButtonLabel}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8a4343',
    marginVertical: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText:{
    textAlign:'center',
    margin:8,
    color:'#ff0000',
    fontSize:18,
    marginBottom:20,
  }
});
