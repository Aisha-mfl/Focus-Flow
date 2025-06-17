import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({label, style, textInputConfig, invalid}) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }

  if(invalid){
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 18,
    borderRadius: 15,
    fontSize: 18,
    color: '#000000',
    elevation: 10,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: 'red',
  },
  invalidInput: {
    backgroundColor: '#ebd1d1',
  },
});
