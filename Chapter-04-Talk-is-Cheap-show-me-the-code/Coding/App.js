// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code
import React from "react";
import ReactDom from "react-dom/client";
import {restaurantList} from "./data.js";

import HotGrillsLogo from "../Images/resturant-logo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCopyright,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// import {faHistory} from "@fortawesome/pro-regular-svg-icons";
// import {faCheckSquare, faCoffee} from "@fortawesome/fontawesome-free-solid";

// const heading = react.createElement("h1", {}, "React App");
// const root = reactDom.createRoot(document.getElementById("root"));
// root.render(heading);

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

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
// RestaurantList is JSON Data for displaying cards
const RestaurantList = restaurantList;
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  const URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img alt="food" src={URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <FontAwesomeIcon icon={faStar} />
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="restaurant-list">
      {RestaurantList.map((restaurantList) => {
        return (
          <RestaurantCard
            {...restaurantList?.data}
            key={restaurantList?.data?.id}
          />
        );
      })}
    </div>
  );
};
// Footer component for footer section
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <span>Created By: Manish Verma </span>

      <span>
        <FontAwesomeIcon icon={faCopyright} />
        <strong>{` ${new Date().getFullYear()} Hot Grills`}</strong>
      </span>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);
