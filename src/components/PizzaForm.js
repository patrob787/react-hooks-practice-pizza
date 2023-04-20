import React, { useState } from "react";

function PizzaForm({ onToppingChange, onSizeChange, onVegChange, topping, size, vegetarian }) {
  // const [topping, setTopping] = useState("Pizza Topping")
  // const [size, setSize] = useState("Small")
  // const [vegetarian, setVegetarian] = useState(false);
  
  
  // function radioChange(e) {
  //   if (e.target.value === "Vegetarian") {
  //     setVegetarian(true)
  //   } else {
  //     setVegetarian(false)
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={onToppingChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
          />
        </div>
        <div className="col">
          <select onChange={onSizeChange} className="form-control" name="size" value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian === true}
              onChange={onVegChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian === false}
              onChange={onVegChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
