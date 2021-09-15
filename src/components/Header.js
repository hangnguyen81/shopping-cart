import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../productsContext'

const Header = () =>{
    const {cartItems} = useContext(Context)

    let iconType = ''
    if(cartItems.length === 0)
        iconType = 'ri-shopping-cart-line ri-fw ri-2x'
    else
        iconType = 'ri-shopping-cart-fill ri-fw ri-2x'

    return(
        <header className='shop-header'>
            <h2 className='header-title'>
                <Link to='/'><i className="ri-store-2-fill"></i> Hanna Kitchen</Link>
            </h2> 
            <p>
                <Link to ='/cart'>
                    <i className={iconType}>
                        <span>{cartItems.length !== 0?cartItems.length:''}</span>
                    </i>
                </Link>
            </p>            
        </header>
    )
}


export default Header