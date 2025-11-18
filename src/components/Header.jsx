

import NavBar from "./NavBar";


export default function Header() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)



    return (

        <header>
            <NavBar />
        </header>
    )
}