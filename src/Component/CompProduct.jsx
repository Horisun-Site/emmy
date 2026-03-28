// import React from "react";
// import "./CompProduct.css";
// import { useNavigate } from "react-router-dom";

// const CompProduct = ({ value }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="compdiv">
//       <img className="compimg" src={value.image} alt="" />
//       <h1 className="comptitle">
//         {value.title.length > 20
//           ? value.title.slice(0, 21) + "..."
//           : value.title}
//       </h1>
//       <h1 className="comptitle">${value.price}</h1>
//       <div className="compbtn">
//         <button
//           onClick={() => navigate("/details", { state: value })}
//           className="btn"
//         >
//           Learn More
//         </button>
//         <button className="btn">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default CompProduct;
