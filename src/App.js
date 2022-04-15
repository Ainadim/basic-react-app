import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const products = [
    { name: "Adobe Photocopy", price: "$50.20" },
    { name: "Adobe Illustrator", price: "$59.20" },
    { name: "Adobe Pdf Viewer", price: "$20.00" },
    { name: "Adobe AI Reader", price: "$620.00" },
    { name: "Adobe AI Reader 2", price: "$690.00" },
    { name: "Adobe AI Reader 3", price: "$550.00" },
    { name: "Adobe AI Reader 4", price: "$820.00" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adobe Products Details</h1>
        <Counter></Counter>
        <UserAll></UserAll>
        <ul>
          {products.map((pd) => (
            <AdobeProducts productsDetails={pd}></AdobeProducts>
          ))}
        </ul>
      </header>
    </div>
  );
}

// Adobe Products

function AdobeProducts(adobePros) {
  const { name, price } = adobePros.productsDetails;

  return (
    <div className="personStyle">
      <h4>Name: {name}</h4>
      <h4>Price: {price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

// State Use

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

// Load dynamic data, API call useEffect integrate state

function UserAll() {
  const [allUser, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  });
  return (
    <div>
      <h2>All User Here:</h2>
      <h5>Total Data: {allUser.length}</h5>
      <ul>
        {allUser.map((myUser) => (
          <li>{myUser.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
