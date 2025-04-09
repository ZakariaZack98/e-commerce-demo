import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import Smartphones from "./pages/Smartphones";
import { ProductProvider } from "./contexts/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Smartphones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
