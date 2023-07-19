import HotGrillsLogo from "../../assets/Images/resturant-logo.jpg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSignOut,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

// Title component for display logo
const Title = () => {
  return <img alt="Hot Grills Logo" src={HotGrillsLogo} className="logo"></img>;
};

// Header component for header section: Logo, Nav Items
const HeaderComponent = () => {
  // use useState for user Sign In in or Sign out
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => setIsSignIn(!isSignIn)} key="">
            <FontAwesomeIcon icon={isSignIn ? faSignIn : faSignOut} />
            {isSignIn ? " Sign In" : " Sign Out"}
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
