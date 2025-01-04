import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook Personalizado
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Compruebe si hay un item duplicado
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );

    // La nueva lista recibe la lista anterior
    let newList = [...favorite];

    //Compruebe si el elemento se repite y agréguelo a la lista de favoritos
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    //Si el elemento se repite será eliminado de la lista.
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);

    return setFavorite(newList);
  }

  return { favorite, addFavorite };
}
