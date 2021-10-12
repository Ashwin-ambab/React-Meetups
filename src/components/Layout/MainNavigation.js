import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/favourites-context";

import "./MainNavigation.css";

const MainNavigation = () => {
  const favouritectx = useContext(FavouriteContext);

  return (
    <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeet">NewMeetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              FavouriteMeetups
              <span className="badge">
                {favouritectx.totalfavourites}
              </span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
