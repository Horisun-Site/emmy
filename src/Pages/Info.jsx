import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Info.css";

const Info = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="infoo">
      <div className="most">
        <Link to={"/dash"}>DASH</Link>
      </div>
      <div className="infoo1">
        <div className="red1">
          <img src={state.strMealThumb} alt="" />
        </div>
        <div className="red2">
          <div className="red21">
            <h1>{state.strMeal}</h1>
          </div>
          <h2>Alternate: {state.strMealAlternate}</h2>
          <p>category: {state.strCategory}</p>
          <h3>Area: {state.strArea}</h3>

          <h5>Tags: {state.strTags}</h5>

          <h4 className="red44">Instruction: {state.strInstructions}</h4>

          <div className="bigred">
            <button>
              <a href={state.strYoutube} target="blank">
                Watch Video
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
