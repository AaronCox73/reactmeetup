import { Link } from "react-router-dom";

import cssClass from "./MainNav.module.css";

function MainNav() {
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
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
