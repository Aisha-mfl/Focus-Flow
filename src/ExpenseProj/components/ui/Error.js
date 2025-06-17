import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Button from './Button';


const Error = ({messege , onConfirm}) => {
  return (
    <View style={styles.continer}> 
      <Text style={[styles.text , styles.title]}>An Error Occured!</Text>
      <Text style={styles.message}>{messege}</Text>
      <Button onPress={onConfirm}>okay!</Button>
    </View>
  )
}

export default Error;

const styles = StyleSheet.create({
    continer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:'#ffefef',
    },
    text:{
        textAlign:'center',
        marginBottom:8,
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        

    },
    message:{
        fontSize:14,
        fontWeight:"bold",
        
    }
})