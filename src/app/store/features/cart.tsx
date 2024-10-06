import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'
// Define the initial state using that type
const initialState:   Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // cart functionalityy
    addToCart(state,action){
        const uid = Math.floor(1000+Math.random()*9000)
        const newobj = {...action.payload , uid }
        state.push(newobj)
    }, 
    // ddcart
    dltItem(state,{payload}){
      return state.filter((valu)=>valu.uid!==payload)
    },

    addCart(state,action){
      const obj = state.find(
        (valu) =>
        valu.id == action.payload.id  );
       if (obj) {
        ++obj.quantity;
        const newstate = state.filter((valu)=>valu.id!==obj?.id)
        state = [...newstate,obj];
        return;
       }
    },

    // sub

    subCart(state,action){
      const obj = state.find(
        (valu) =>
        valu.id == action.payload.id );
       if (obj !== undefined) {
        if (obj.quantity<=1){
          return state.filter((valu)=>valu.uid!== obj.uid)
        }
        --obj.quantity;
        const newstate = state.filter((valu)=>valu.uid!==obj?.uid)
        state = [...newstate,obj];
        return;
       }
    }
  }, 
})

  

export const { addToCart, dltItem , addCart , subCart } = cartSlice.actions;


export default cartSlice.reducer  
