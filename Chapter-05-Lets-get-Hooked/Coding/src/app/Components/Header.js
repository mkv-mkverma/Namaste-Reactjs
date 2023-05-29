import HotGrillsLogo from "../../assets/Images/resturant-logo.jpg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCopyright,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// Title component for display logo
const Title = () => {
  return <img alt="Hot Grills Logo" src={HotGrillsLogo} className="logo"></img>;
};

// Header component for header section: Logo, Nav Items
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
