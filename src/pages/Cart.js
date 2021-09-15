import { useContext } from "react"
import { Context } from "../productsContext"
import CartItem from "../components/CartItem"

const Cart = () =>{
    const {cartItems} = useContext(Context)
    const items = cartItems.map(item => <CartItem key={item.id} item={item}/>)
    return(
        <div className='shopping-cart'>
            <h1 className='page-title'>Cart - checkout page</h1>
            {items}
        </div>
    )
}

export default Cart