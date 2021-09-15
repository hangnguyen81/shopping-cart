import { useState,useContext } from "react"
import { Context } from "../productsContext"

const Product = ({product, productStyle}) =>{
    const [hovered, setHovered] = useState(false)
    const {cartItems, addToCart, removeFromCart, toggleFavour} = useContext(Context)

    const heartIcon = () => {
        let iconType=''
        if (product.isFavour)
            iconType='ri-heart-fill' 
        else if (hovered)
            iconType='ri-heart-line'
        return <i className={`${iconType} favorite`} onClick={() =>toggleFavour(product.id)}></i>
    }

    const cartIcon = () =>{
        const itemFound = cartItems.some(item => item.id === product.id)
        if (itemFound)
            return <i className="ri-shopping-cart-fill cart" onClick={() =>removeFromCart(product.id)}></i>
        else if(hovered)
            return <i className="ri-add-circle-line cart" onClick={() =>addToCart(product) }></i>

    }

    return(
        <div className={`${productStyle} products-container`}
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() =>setHovered(false)}
        >
            <img 
                className = 'product-grid' 
                src={product.url} 
                alt={`product item ${product.id}`}
            />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Product