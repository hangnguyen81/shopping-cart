const CartItem = ({item}) =>{
    return(
        <div key={item.id}>
            <img src={item.url} alt={`cartItem number ${item.id}`}/>
        </div>
    )
}

export default CartItem