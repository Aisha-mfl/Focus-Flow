import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}> {children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#9b5050',
    

  },

  flat: {
    backgroundColor: 'transparent',
    borderRadius: 30,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,

  },
  flatText: {
    color: "#9b5050",
    fontSize: 18,


  }

})
