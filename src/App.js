import "./App.css";
import ProductList from "./ProductList";
import React, { useState } from "react";

function App(props) {
  return (
    <div className="App">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12" id="bandeau_haut">
              <h3>Ecommerce Software Solution</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12" id="bloc_gauche">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
