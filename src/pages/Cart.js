import { useState, useContext } from "react"
import { Context } from "../productsContext"
import CartItem from "../components/CartItem"

const Cart = () =>{
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState('Place Order')

    let totalPrice = 0
    const items = cartItems.map(item => {
        totalPrice +=item.price
        return (
            <CartItem key={item.id} item={item}/>
        )}
    )

    const placeOrder = () =>{
        setButtonText('Ordering ...')
        setTimeout(() =>{
            setButtonText('Place Order')
            emptyCart()
        },3000)
    }

    return(
        <div className='cart-page'>
            <h1 className='page-title'>Check out </h1>
            {items}
            {cartItems.length !==0?
                <>
                    <p className='total-price'>Total: {totalPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
                    <button className='btn-order'  onClick={() => placeOrder()}>{buttonText}</button>
                </>
            :
                <p>You have no item in your cart</p>
            }
        </div>
    )
}

export default Cart