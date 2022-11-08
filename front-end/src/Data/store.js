import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./reducer"

const Store = configureStore({
    reducer : {

        Tasks : TaskReducer

    }
})

export default Store