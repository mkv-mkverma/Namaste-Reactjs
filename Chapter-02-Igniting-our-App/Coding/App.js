// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

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
import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);