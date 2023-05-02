//? Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Every One from Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

//? Manipulate the HTML DOM using React
// const heading = React.createElement('h1',{},'Namaste Every One from Javascript');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//? Write a progream to generate below code (Create nested React Elements)
// <div id="container">
//     <h1>Heading 1<h1/>    
//     <h2>heading 2<h2/>    
// <div/>

const heading1 = React.createElement('h1',{},'Heading 1');
const heading2 = React.createElement('h1',{},'Heading 2');

const container = React.createElement('div',{id:"container"},[heading1,heading2]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
root.render(container)