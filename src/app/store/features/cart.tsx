import { Cart } from '@/app/utils/types'
import { ValueIcon } from '@radix-ui/react-icons'
import { createSlice } from '@reduxjs/toolkit'




// Define the initial state using that type
let initialState:   Cart[] = []

export let cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // cart functionalityy
    addToCart(state,action){
        let uid = Math.floor(1000+Math.random()*9000)
        let newobj = {...action.payload , uid }
        state.push(newobj)
    }, 
    // ddcart
    dltItem(state,{payload}){
      return state.filter((valu)=>valu.uid!==payload)
    },

    addCart(state,action){
      let obj = state.find(
        (valu) =>
        valu.id == action.payload.id  );
       if (obj) {
        ++obj.quantity;
        let newstate = state.filter((valu)=>valu.id!==obj?.id)
        state = [...newstate,obj];
        return;
       }
    },

    // sub

    subCart(state,action){
      let obj = state.find(
        (valu) =>
        valu.id == action.payload.id );
       if (obj !== undefined) {
        if (obj.quantity<=1){
          return state.filter((valu)=>valu.uid!== obj.uid)
        }
        --obj.quantity;
        let newstate = state.filter((valu)=>valu.uid!==obj?.uid)
        state = [...newstate,obj];
        return;
       }
    }
  }, 
})

  

export let { addToCart, dltItem , addCart , subCart } = cartSlice.actions;


export default cartSlice.reducer  
