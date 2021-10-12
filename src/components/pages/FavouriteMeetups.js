import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";
import MeetupsList from "../meetups/MeetupsList";

const FavouriteMeetups = () => {
    const favoritectx = useContext(FavouriteContext)

    let content;
    
    if(favoritectx.totalfavourites === 0){
        content = <p>You got no favourites</p>
    }else{
        content = <MeetupsList meetups = {favoritectx.favourites} />
    }

    return(<section>
        <h1>Favorites</h1>
        {content}
    </section>
    );
};

export default FavouriteMeetups;