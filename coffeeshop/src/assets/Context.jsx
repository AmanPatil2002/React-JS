import React, { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { cartReducer, productReducer } from './Reducers'
const prods=createContext()

function Context({children}) {
    let coffee=[
        {
            id:1,
            name:"Cold Coffee",
            image:"./images/img-1.png",
            price:100,
            stock:10,
            qty:1
        },
        {
            id:2,
            name:"Capechino",
            image:"./images/img-2.png",
            price:150,
            stock:9,
            qty:1
        },
        {
            id:3,
            name:"Hot Coffee",
            image:"./images/img-3.png",
            price:80,
            stock:7,
            qty:1
        },
        {
            id:4,
            name:"Chocolate Coffee",
            image:"./images/img-4.png",
            price:180,
            stock:10,
            qty:1
        },
        {
            id:5,
            name:"Coffee with Cake",
            image:"./images/img-5.png",
            price:200,
            stock:0,
            qty:1
        },
        {
            id:6,
            name:"Apple Coffee",
            image:"./images/img-6.png",
            price:130,
            stock:9,
            qty:1
        },
        {
            id:7,
            name:"Ice Coffee",
            image:"./images/img-7.png",
            price:210,
            stock:0,
            qty:1
        },
        {
            id:8,
            name:"Black Coffee",
            image:"./images/img-8.png",
            price:70,
            stock:6,
            qty:1
        },
        {
            id:9,
            name:"Latte Coffee",
            image:"./images/img-9.png",
            price:230,
            stock:0,
            qty:1
        }
    ]
    const [state,dispatch]=useReducer(cartReducer,{
        products:coffee,
        cart:[]
    })
    const [productstate, productdispatch]=useReducer(productReducer,{
        stock:false,
        searchQuery:""
    })
  return (
    <prods.Provider value={{state,dispatch,productstate,productdispatch}}>
        {children}
    </prods.Provider>
  )
}

export default Context
export const cartState=()=>{
    return useContext(prods)
}

