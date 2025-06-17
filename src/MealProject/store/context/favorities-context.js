import {createContext, useState} from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

const FavContextProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = id => {
    console.log(id);
    
    setFavoriteMealsIds(currentfavIds => [...currentfavIds, id]);
  };
  const removeFavorite = id => {
    setFavoriteMealsIds(currentfavIds =>
      currentfavIds.filter(mealId => mealId != id),
    );
  };
  const values = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavContextProvider;
