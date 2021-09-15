import React, { useState, useEffect } from "react";
import productsData from "./productsData";

const Context = React.createContext()

const ContextProvider = ({children}) =>{
    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() =>{
        setAllProducts(productsData)
    },[])

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

    return(
        <Context.Provider value={{
            allProducts, 
            cartItems,
            toggleFavour,
            addToCart,
            removeFromCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}