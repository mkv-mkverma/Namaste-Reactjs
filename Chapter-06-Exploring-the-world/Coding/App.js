// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

// Default Import
import React from "react";
import ReactDom from "react-dom/client";

import Header from "./src/app/Components/Header";
import Footer from "./src/app/Components/Footer";
import Body from "./src/app/Components/Body";

// Named Import
// import {RestaurantList, IMG_CDN_URL} from "./src/app/constants";

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

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
