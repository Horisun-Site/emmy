import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  const [count, setCount] = useState(0);
  return (
    <div className="infoo">
      <div className="most">
        <Link to={"/"}>HOME</Link>
      </div>
      <div className="details">
        <div className="details-img">
          <img src={state.images[count < 0 || count > 2 ? 0 : count]} alt="" />
          <div className="arrow">
            <h1 onClick={() => setCount(count - 1)}>{"<"}</h1>
            <h1 onClick={() => setCount(count + 1)}>{">"}</h1>
          </div>
        </div>

        <div className="details2">
          <p className="roos">{state.category}</p>
          <p>{state.category.name}</p>
          <h1>{state.title}</h1>
          <h1>{state.brand}</h1>
          <h1>{state.sku}</h1>
          <h1>{state.tags}</h1>
          <p>⭐{state.rating}</p>

          <h3>
            Description: <br /> {state.description}{" "}
          </h3>
          <p className="real"> stock: {state.stock}</p>
          <h2>Price ${state.price}</h2>
          <h2> Discount price $ {state.discountPercentage}</h2>

          <div className="but">
            <button className="but1">Add to Cart</button>

            <button className="but2">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
