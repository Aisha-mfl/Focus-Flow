import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../utils/colors';
import Fonts from '../../../assets/fonts';

const GuessLogs = ({roundNumber , guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.ItemText}>
        {roundNumber}
      </Text>
      <Text style={styles.ItemText}> Opponent's Guess:{guess}</Text>
    </View>
  );
};

export default GuessLogs;

const styles = StyleSheet.create({
listItem:{
    borderWidth:1,
    borderColor:Colors.primary300,
    borderRadius:40,
    padding:12,
    marginVertical:8,
    backgroundColor:Colors.primary600,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0 , height:0},
    shadowOpacity:0.25,
    shadowRadius:3,


},
ItemText:{
    fontFamily:Fonts.Roboto.bold,

},

});
