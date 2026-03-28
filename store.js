import { data } from "react-router-dom";
import { create } from "zustand";


export const useCount=create((set)=>(
    {
        data:0,
        useAdd:()=>set((state)=>({data:state.data+1})),
        useMinus:()=>set((state)=>({data:state.data-1}))
    }
))

export const useData=create((set)=>(
    {
        value:[],
        Cart:[],
        FetchData:async()=>{
            const res=await fetch("https://fakestoreapi.com/products")
            const res2=await res.json()
            set({value:res2})
        },
        addToCart:(product)=>set((state)=>({Cart:[...state.Cart,product]}))
    }
))

