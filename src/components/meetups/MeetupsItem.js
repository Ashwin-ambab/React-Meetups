import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";
import Card from "../UI/Card";

import "./MeetupsItem.css";

const MeetupsItem = (props) => {
  const favoritesCtx = useContext(FavouriteContext);

  const itemIsFavorite = favoritesCtx.itemFavourite(props.id);

  const toggleHandler = () => {
    if (itemIsFavorite) {
        favoritesCtx.removeFavourite(props.id);
    } else {
        favoritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  };
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="actions">
          <button onClick={toggleHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
