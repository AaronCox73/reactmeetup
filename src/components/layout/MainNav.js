import { useContext } from "react";
import { Link } from "react-router-dom";

import cssClass from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={cssClass.header}>
      <div className={cssClass.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={cssClass.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
