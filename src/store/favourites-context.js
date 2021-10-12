import { createContext } from "react";
import { useState } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalfavourites: 0,
    addFavourite: () => {},
    removeFavourite: () => {},
    itemFavourite: () => {}
});

export const FavouriteContextProvider = (props) => {
    const[userFavourites,setUserFavourites] = useState([]);

    const addFavoritehandler = (favoriteMeetup) => {
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.concat(favoriteMeetup);
        });
    };

    const removeFavouriteHandler = (meetupID) => {
        setUserFavourites(prevUserFavourite => {
            return prevUserFavourite.filter((meetup) => meetup.id !== meetupID);
        });
    };

    const itemFavouriteHandler = (meetupID) => {
        return userFavourites.some((meetup) => meetup.id === meetupID)
    };


    const context = {
        favourites: userFavourites,
        totalfavourites: userFavourites.length,
        addFavourite: addFavoritehandler,
        removeFavourite: removeFavouriteHandler,
        itemFavourite: itemFavouriteHandler,
    };

    return(
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    );

};

export default FavouriteContext;