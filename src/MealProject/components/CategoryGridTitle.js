import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from 'react-native';
import Fonts from '../../assets/fonts';


export default function CategoryGridTitle({title, image, onPress}) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{color: '#cccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{borderRadius: 10}}
        />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    marginTop: 60,
    marginHorizontal: 20,
    marginVertical: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  imageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.OpenSans.bold,
    color: '#333',
    padding: 8,
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
