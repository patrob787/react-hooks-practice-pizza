import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const [selectPizza, setSelectPizza] = useState({ topping: "Pizza Topping", size: "Small", vegetarian: false });

  const [topping, setTopping] = useState("Pizza Topping")
  const [size, setSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzaList(data))
  }, [])

  function selectEditPizza(pizzaObj) {
    setSelectPizza(pizzaObj)
    setTopping(pizzaObj.topping)
    setSize(pizzaObj.size)
    setVegetarian(pizzaObj.vegetarian)
  }

  function handleToppingChange(e){
    setTopping(e.target.value)
  };

  function handleSizeChange(e){
    setSize(e.target.value)
  };

  function handleVegChange(e){
    if (e.target.value === "Vegetarian") {
      setVegetarian(true)
    } else {
      setVegetarian(false)
    }
  }

  return (
    <>
      <Header />
      <PizzaForm 
        selectPizza={selectPizza}
        onToppingChange={handleToppingChange}
        onSizeChange={handleSizeChange}
        onVegChange={handleVegChange}
        topping={topping}
        size={size}
        vegetarian={vegetarian} />
      <PizzaList pizzaList={pizzaList} onEditPizza={selectEditPizza} />
    </>
  );
}

export default App;
