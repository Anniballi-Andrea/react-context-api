import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Products() {


    const [prodocts, setProdocts] = useState([])


    function fetchProdocts() {

        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProdocts(res.data))


    }

    useEffect(fetchProdocts, [])

    return (
        <>

            <main>
                <div className="container">
                    <div className="row">
                        {
                            prodocts.map((el) => (
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
