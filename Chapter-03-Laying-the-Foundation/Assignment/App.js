// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation
// # Assignment

import React from "react";
import ReactDOM from "react-dom/client";
import userIcon from "./user.png";
import logo from "./logo.png";
//* Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement("div", {className: "title", key: "title"}, [
//   React.createElement("h1", {key: "h1"}, "This is h1 Tag"),
//   React.createElement("h2", {key: "h2"}, "This is h2 Tag"),
//   React.createElement("h3", {key: "h3"}, "This is h3 Tag"),
// ]);

//* Q: Create the same element using JSX

// const header = (
//   <div className="title" key="title">
//     <h1 key="h1">This is h1 Tag</h1>
//     <h2 key="h2">This is h1 Tag</h2>
//     <h3 key="h3">This is h1 Tag</h3>
//   </div>
// );

//* Q: Create a functional component of the same with JSX

// const Header = () => {
//   return (
//     <div className="title" key="title">
//       <h1 key="h1">This is h1 Tag</h1>
//       <h2 key="h2">This is h1 Tag</h2>
//       <h3 key="h3">This is h1 Tag</h3>
//     </div>
//   );
// };

//* Q: Pass attribute into the tag in JSX

// const Header = () => {
//   return (
//     <div className="title" key="title">
//       <h1 id="h1" key="h1" style={{color: "black"}}>
//         This is h1 Tag
//       </h1>
//       <h2 id="h2" key="h2" style={{color: "grey"}}>
//         This is h2 Tag
//       </h2>
//       <h3 id="h3" key="h3" style={{color: "lightgrey"}}>
//         This is h3 Tag
//       </h3>
//     </div>
//   );
// };

//* Q:Composition of Component (Add a component inside another)

// const AnotherComponent = () => {
//   return <h2>This is another component</h2>;
// };

// const Header = () => {
//   return (
//     <div className="title" key="title">
//       <h1 id="h1" key="h1" style={{color: "black"}}>
//         This is h1 Tag
//       </h1>
//       <h2 id="h2" key="h2" style={{color: "grey"}}>
//         This is h2 Tag
//       </h2>
//       <h3 id="h3" key="h3" style={{color: "lightgrey"}}>
//         This is h3 Tag
//       </h3>
//       <AnotherComponent />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(header);
// root.render(<Header />);

//* Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//   return <h2 style={{ color: "red" }}>This Title Element</h2>;
// }; // This is Title Component

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {/* This is {TitleComponent} */}
//       {element}
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       {/* This is {<TitleComponent/>} */}
//       <TitleElement/>
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       {/* This is {<TitleComponent></TitleComponent>}*/}
//       <TitleElement></TitleElement>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

/* 
* Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
  return (
    <header id="header" className="header" key="header">
      <div id="logo" className="logo" key="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div id="search" className="search" key="search">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />
        <button type="submit">
          <i class="fa fa-search">Search</i>
        </button>
      </div>
      <div id="user" className="user" key="user">
        <img src={userIcon} alt="user Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
