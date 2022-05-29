import { useContext } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import axios from "axios"

export const Login=()=>{
const {state,dispatch}=useContext(AuthContext)
const navigate=useNavigate()
const [searchparams,setSearchParams]=useSearchParams()

const loginUsers=async()=>{
    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"

        }
    })
    .then((res)=>{
        alert("Success")
        dispatch({
            type:"LOGIN_SUCCESS",
        payload: res.data.token,
        })
        // navigate("/users")
        const redirect=searchparams.get("redirectTo")
        if(redirect){
            navigate(redirect)
        }else{
            navigate("/users")
        }
    })
    .catch((err)=>{
        alert("Failure")
    })
    
}


if(state.isAuth){
    return <Navigate to="/"/>
}
    return(
        <div>
            <h1>Login</h1>
            <button onClick={loginUsers} >Login</button>
        </div>
    )
}