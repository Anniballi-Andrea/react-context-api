import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext"

export default function Products() {
    const { budgetMode, maxPrice } = useContext(BudgetContext)

    const [prodocts, setProdocts] = useState([])

    const [prodoctList, setProdoctList] = useState([])


    const budgetProdocts = prodocts.filter((prodoct) => prodoct.price <= maxPrice)

    function fetchProdocts() {

        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProdocts(res.data)
                setProdoctList(res.data)
            })

    }

    useEffect(fetchProdocts, [])

    function FilteredProduct() {

        if (maxPrice !== null) {
            setProdoctList(budgetProdocts)

        } else if (maxPrice === "") {
            setProdoctList(prodocts)

        }

    }

    useEffect(FilteredProduct, [maxPrice])
    console.log(maxPrice)




    return (
        <>

            <main>
                <h1>{maxPrice}</h1>
                <div className="container">
                    <div className="row">
                        {
                            prodoctList.map((el) => (
                                <div key={el.id} className="col-sm-12 col-md-4 ">
                                    <Link to={`/products/${el.id}`}>
                                        <div className="card no_border_bottom">
                                            <img src={el.image} alt="" />
                                        </div>
                                    </Link>
                                    <div className="card-body">
                                        <div className=" h-150 p-3">
                                            <h4>{el.title}</h4>



                                        </div>
                                        <div className="card-footer my-3 p-3">
                                            <div><span>category: </span>{el.category} </div>
                                            <div><span>€{el.price}</span></div>
                                            <div>{el.rating !== undefined && `rate: ${el.rating.rate}/5`}</div>
                                        </div>

                                    </div>


                                </div>

                            ))
                        }

                    </div>
                </div>
            </main >

        </>
    )

}
