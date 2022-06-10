import { useEffect, useState } from "react";
import "./App.css";
import AddProduct from "./AddProduct";

function Produit(Props) {
  return (
    <tr>
      <td>
        <label>{Props.id}</label>
      </td>
      <td>
        <label>{Props.name}</label>
      </td>
      <td>
        <label>{Props.description}</label>
      </td>
      <td>
        <label>{Props.prix}</label>
      </td>
      <td>
        <img src={Props.image} width="100" height="100"></img>
      </td>
    </tr>
  );
}

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get_products", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((jsondata) => {
        setProducts(jsondata);
      });
  }, []);

  let produits = products.map((p) => {
    return (
      <Produit
        key={p.id}
        id={p.id}
        name={p.name}
        description={p.description}
        prix={p.prix}
        image={p.image}
      />
    );
  });
  return (
    <div>
      <table className="table tasktable table-striped table-responsive">
        <thead>
          <tr>
            <th>Référence</th>
            <th>Produit</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>{produits}</tbody>
      </table>
      <AddProduct fonctionretour={setProducts} />
    </div>
  );
}

export default ProductList;
