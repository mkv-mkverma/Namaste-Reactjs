// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code (remove console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression of files
 * Compatible with older version of browser
 * Enable HTTPS on dev
 * Manages port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking (removing unwanted/unused code)
 *
 *
 * Transitive Dependencies
 * Npm takes care of Transitive Dependencies(parcel use dependencies and that dependencies also use dependencies) of our code
 * Babel comes along with parcel
 */

// imported react and reactdom from nodemodule folder
import {React, createElement as ce} from "react";
// import React from 'react';
import ReactDOM from "react-dom/client";
//* Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */

// const heading = ce("div", {className: "header", key: "header"}, [
//   ce("h1", {id: "title", key: "h1"}, "Title"),
//   ce("ul", {id: "ul", key: "ul"}, [
//     ce("li", {id: "home", key: "home"}, "Home"),
//     ce("li", {id: "about", key: "about"}, "About Us"),
//   ]),
// ]);

//* create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
// React Element
const heading = (
  <h1 id="heading" key="heading">
    This is JSX
  </h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">
      Namaste React
    </h1>
  );
};

// Header component is functional component
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {/* any js syntax we can write */}
      {1 + 2}
      {console.log(10)}
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const container = ce(
  "div",
  {
    id: "container",
  },
  [heading]
);

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title1",
//       key:"h"
//     },
//     "heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title2",
//       className:"text-red",
//       key:"h1"
//     },
//     "heading1"
//   );

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
// root.render(container);
root.render(<HeaderComponent />);
