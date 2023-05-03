import ReactDOM from "react-dom/client";

// Title component is functional component
const Title = () => {
  return <h1>Practice React By NamasteJs</h1>;
};

// Header component is functional component
const HeaderComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2 key="key1" id="key1" className="text-red" tabIndex="1">
        This is h2 tag
      </h2>
      <h2 style={{color: "palevioletred"}} key="key2">
        This another is h2 tag
      </h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
