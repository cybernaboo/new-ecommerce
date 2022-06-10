import { useEffect, useState } from "react";
import "./App.css";

function reinitAddinfos(){
  console(" clean infos");
  document.getElementById("id").value = "";
  document.getElementById("produit").value = "";
  document.getElementById("description").value = "";
  document.getElementById("prix").value = "";
  document.getElementById("image").value = "";
}

function HandleSubmit(event, fonctionretour) {
  event.preventDefault();
  let produit = {
    name: document.getElementById("produit").value,
    description: document.getElementById("description").value,
    prix: document.getElementById("prix").value,
    image: document.getElementById("image").value,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit),
  };
  fetch("http://localhost:3001/new-product", requestOptions)
    .then((res) => res.json())
    .then((res) => fonctionretour(res))
    .then(() => reinitAddinfos());
}

function AddProduct(props) {
  return (
    <form
      id="formulaire"
      onSubmit={(event) => HandleSubmit(event, props.fonctionretour)}
    >
      <br />
          <label>
            Nom :
            <input type="text" id="produit" />
          </label>
          <br />
          <br />
          <label>
            Description :
            <input type="text" id="description" />
          </label>
          <br />
          <br />
          <label>
            Prix :
            <input type="text" id="prix" />
          </label>
          <br />
          <br />
          <label>
            URL Image :
            <input type="text" id="image" />
          </label>
      <br />
      <br />
      <input type="submit" value="Ajouter produit" />
    </form>
  );
}

export default AddProduct;
