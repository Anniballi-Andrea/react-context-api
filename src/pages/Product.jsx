import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Product() {

    const { id } = useParams()
    const [prodoct, setProdoct] = useState({})
    const navigate = useNavigate()


    function fetchProdoct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => (
                setProdoct(res.data)

            )

            )







    }

    useEffect(fetchProdoct, [])





    return (
        <main><div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card prodoct_image">
                        <img src={prodoct.image} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>{prodoct.title}</h3>
                        </div>

                        <div className="px-3">
                            <ul className=" list-unstyled">
                                <li className=" my-2">
                                    <span>category:</span> {prodoct.category}
                                </li>
                                <li className=" my-4">
                                    {prodoct.description}
                                </li>
                                <li className=" my-4 ">
                                    <div className="d-flex justify-content-between">
                                        <div>price: €{prodoct.price}</div>
                                        <div>
                                            {prodoct.rating !== undefined && `rate: ${prodoct.rating.rate}/5`}
                                        </div>


                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </main>
    )
}