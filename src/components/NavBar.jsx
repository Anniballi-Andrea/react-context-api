import { NavLink } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext"

export default function NavBar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    function toggleBudgetMode() {
        if (budgetMode) {
            setBudgetMode(false)
        } else {
            setBudgetMode(true)
        }

    }


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BoolStore</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-3">
                            <NavLink className="nav-link" to="/"  >Home</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink className="nav-link" to="/About"  >About Us</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink className="nav-link" to="/products" >Products</NavLink>
                        </li>


                    </ul>
                </div>
                <button className="btn" onClick={toggleBudgetMode}>budget Mode: {budgetMode ? "on" : "off"} </button>
            </div>
        </nav>
    )
}