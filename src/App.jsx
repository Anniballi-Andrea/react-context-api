import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Product from "./pages/Product";
import BudgetContext from "./context/BudgetContext";
import { useState } from "react";



function App() {

  //const [budgetMode, setBudgetMode] = useState(false)
  const [budgetMode, setBudgetMode] = useState(null)


  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
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
    </BudgetContext.Provider>
  )
}
//
//
export default App
