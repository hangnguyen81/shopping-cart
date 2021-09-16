import { useState, useContext } from "react"
import { Context } from "../productsContext"

const CartItem = ({item}) =>{
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)
    
    let iconType = ''
    if(hovered)
        iconType = 'ri-delete-bin-2-fill'
    else
        iconType = 'ri-delete-bin-2-line' 

    return(
        <>
            <div className='cart-item'  key={item.id}>
                <div>
                    <i className={iconType} 
                        onMouseEnter = {() => setHovered(true)}
                        onMouseLeave = {() => setHovered(false)}
                        onClick = {() => removeFromCart(item.id)}
                    ></i>
                    <img src={item.url} alt={`cartItem number ${item.id}`}/>
                </div>
                <p>{item.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
            </div>
            <hr/>
        </>
    )
}

export default CartItem