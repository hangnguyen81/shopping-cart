import React, { useState, useEffect } from "react";
import productsData from "./productsData";

const Context = React.createContext()

const ContextProvider = ({children}) =>{

    const [allProducts, setAllProducts] = useState(() =>{
        const productData = JSON.parse(localStorage.getItem('allProducts'))
        return productData?productData:productsData
    })
        
    const [cartItems, setCartItems] = useState(() =>{
        const cartData = JSON.parse(localStorage.getItem('cartItems'))
        return cartData?cartData:[]
    })
    
    useEffect(() =>{
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
    },[allProducts])

    useEffect(() =>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    },[cartItems])

    const toggleFavour = (id) =>{
        const updateProducts = allProducts.map(product =>{
            if (product.id === id)
                return {
                    ...product,
                    isFavour: !product.isFavour
                }
            else 
                return product
        })
        setAllProducts(updateProducts)

    }

    const addToCart = (product) =>{
        const updateCartItems = cartItems.concat(product)
        setCartItems(updateCartItems)
        
    }

    const removeFromCart = (id) =>{
        const updateCartItems = cartItems.filter(item => item.id !==id)
        setCartItems(updateCartItems)

    }

    const emptyCart = () =>{
        setCartItems([])

    }
    return(
        <Context.Provider value={{
            allProducts, 
            cartItems,
            toggleFavour,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}