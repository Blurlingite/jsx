// Import React & ReactDOM libraries
// "React" is the name of the variable and yuo can name it what you want but "React" is a common convention
// "react" is the dependency's name. It will look inside "node_modules" for a folder with that name
import React from "react";
// Create a react component
import ReactDOM from "react-dom";
// Take the react component and show it on the screen

const App = () => {
  return <div>Hi there!</div>;
};

// document.querySelector() takes in an HTML element's id and will render the first argument (<App />) to that element. The element we are rendering to id the <div> with an id of root in the "public" folder's index.html file. That file is what you see in the browser. We must say "#root" not just "root" b/c it is an id
ReactDOM.render(<App />, document.querySelector("#root"));
