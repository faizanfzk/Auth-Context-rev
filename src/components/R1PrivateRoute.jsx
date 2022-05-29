import {Navigate} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
export const PrivateRoute=({children})=>{

    const {state}=useContext(AuthContext)

    if(state.isAuth){
        return children
    }
    return <Navigate to="/login" />
}