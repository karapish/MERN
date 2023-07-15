import React from "react";
import NavBar from "./NavBar";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <h1>Pagina Home</h1>
        <p> Texto de ejemplo parrafo loremipsun </p>
      </div>
    );
  }
}

export default Home;
