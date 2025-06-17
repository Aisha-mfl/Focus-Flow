import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable style={({ pressed }) => [styles.item, pressed && styles.pressed]} onPress={onSelect.bind(this, place.id)}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItem: 'flex-start',
    borderRadius: 6,
    marginvertical: 12,
    backgroundColor: '#fac8c8',
    elevation: 2,
    marginBottom: 20

  },
  pressed: {
    opcaity: 0.5
  },
  image: {
    height: 120,
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  info: {
    flex: 2,
    padding: 12
  },
  title: {
    fontWeight: 'bold',
    fontsize: 20,
    color: '#111111',
    marginBottom: 5

  },
  address: {
    fontSize: 16,
    color: '#111111'
  }
});