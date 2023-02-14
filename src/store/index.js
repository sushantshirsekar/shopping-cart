import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";


const store = configureStore({
    reducer : {
        UI: uiSlice, 
        cart: cartSlice, 
    }
})

export default store; 