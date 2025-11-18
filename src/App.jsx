import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Product from "./pages/Product";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route path="/" Component={HomePage} />
          <Route path="/About" Component={AboutUs} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:id" Component={Product} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}


export default App
