import { ActivityIndicator, StyleSheet, View } from 'react-native';


const Loading = () => {
  return (
    <View style={styles.continer}> 
      <ActivityIndicator size='large' color='#8a4343' />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    continer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:'#ffefef'
    }
})