import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <nav style={{display:"flex",justifyContent:"center",gap:"20px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link> 
        <Link to="/login">Login</Link>
        </nav>
    )
}