import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const [selectPizza, setSelectPizza] = useState({ topping: "Pizza Topping", size: "Small", vegetarian: false });

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzaList(data))
  }, [])

  function selectEditPizza(pizzaObj) {
    setSelectPizza(pizzaObj)
  }

  return (
    <>
      <Header />
      <PizzaForm selectPizza={selectPizza} />
      <PizzaList pizzaList={pizzaList} onEditPizza={selectEditPizza} />
    </>
  );
}

export default App;
