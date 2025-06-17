import { StyleSheet } from 'react-native';
import PlacesList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { getPlaces} from '../../utils/db-servise';


const Allplaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isfocused = useIsFocused();
  useEffect(() => {

    const loadPlaces = async () =>{
      const response = await getPlaces();
      console.log('response',response);
      
      setLoadedPlaces(response);
    }
    if (isfocused) {
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place])
      loadPlaces();
    }
  }, [isfocused]);

  return (
    <PlacesList places={loadedPlaces} />
  )
}

export default Allplaces;

const styles = StyleSheet.create({})