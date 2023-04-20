import React, { useState } from "react";

function PizzaForm({ selectPizza }) {
  const [topping, setTopping] = useState("Pizza Topping")
  const [size, setSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(false);
  
  
  function radioChange(e) {
    if (e.target.value === "Vegetarian") {
      setVegetarian(true)
    } else {
      setVegetarian(false)
    }
  }

  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={e => setTopping(e.target.value)}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={selectPizza.topping}
          />
        </div>
        <div className="col">
          <select onChange={(e) => setSize(e.target.value)} className="form-control" name="size" value={selectPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div value={selectPizza.vegetarian} className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={selectPizza.vegetarian === true}
              onChange={radioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={selectPizza.vegetarian === false}
              onChange={radioChange}
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
