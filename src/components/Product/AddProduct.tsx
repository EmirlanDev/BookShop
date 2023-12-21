import React from "react";
import Inputs from "../Inputs/Inputs";

const AddProduct: React.FC = () => {
  return (
    <section id="add">
      <div className="container">
        <div className="add">
          <Inputs />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
