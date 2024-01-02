import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MianRoutes from "./routes/MianRoutes";
import FootHeader from "./components/FootHeader/FootHeader";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MianRoutes />
      <Footer /> */}
      <FootHeader />
    </div>
  );
}

export default App;
