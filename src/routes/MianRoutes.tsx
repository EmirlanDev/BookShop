import React from "react";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/Product/AddProduct";

const MianRoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/add", element: <AddProduct />, id: 2 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MianRoutes;
