import React from 'react'
import { Link , useSearchParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const products = [
    {id: 1 , name: "Product 1"},
    {id: 2 , name: "Product 2"},
    {id: 3 , name: "Product 3"},
    {id: 4 , name: "Product 4"}
]

function ProductPage() {

    const [searchParams , setSearchParams] = useSearchParams();
    //?sortby=price&order=desc
    const sortBy = searchParams.get("sortby");
    const order = searchParams.get("order")
    console.log({sortBy,order});


    const sortHandler = () => {
        setSearchParams({order :"asc" , sortdby : "sale"  })
    };

  return (
    <div>
        <NavBar/>
        <button onClick={sortHandler} >asdfasd</button>
        <ul>
            {products.map(product => (
                <li key={product.id} >
                    <Link to={`/productspage/${product.id}`} > {product.name} </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductPage