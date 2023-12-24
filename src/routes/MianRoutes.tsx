import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/Product/AddProduct";
import AllBooks from "../pages/AllBooks/AllBooks";
import Detail from "../components/Product/Detail/Detail";

const MianRoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/add", element: <AddProduct />, id: 2 },
    { link: "/detail/:id", element: <Detail />, id: 3 },
  ];

  const ADMIN = [{ link: "/allBooks", element: <AllBooks />, id: 1 }];
  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {ADMIN.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MianRoutes;
