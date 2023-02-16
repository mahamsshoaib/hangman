import { configureStore } from "@reduxjs/toolkit";
import gameBoardReducer from "../components/gameBoardSlice";

const store = configureStore({
    reducer:{
        gameBoard: gameBoardReducer
    }
})

export default store;