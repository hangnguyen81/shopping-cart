import { useContext } from "react"
import { Context } from "../productsContext"
import Product from "../components/Product"
import { getStyle } from "../utils"

const Products = () =>{
    const {allProducts} = useContext(Context)
    const products = allProducts.map((product,i) =>(
        <Product 
            key={product.id} 
            product={product}
            productStyle = {getStyle(i)}
        />))
    return(
        <>
            <h1 className='page-title'>Delicious food from Hanna Kitchen</h1>
            <div className='products'>            
                {products}
            </div>
        </>
    )
}

export default Products