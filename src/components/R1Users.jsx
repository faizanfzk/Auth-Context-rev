import axios from "axios"
import { useContext, useEffect,useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"


export const Users=()=>{
const [loading,setLoading]=useState(true)
const[data,setData]=useState(null)
const {state}=useContext(AuthContext)
const [searchparams,setsearchParams]=useSearchParams()
const [page,setPage]=useState(Number(searchparams.get("page")|| 1))
    useEffect(()=>{
        
        setLoading(true)
       
        axios({
            method:"GET",
            url:`https://reqres.in/api/users`,
            params:{
                page
            }
        }).then(res=>{
            setData(res.data)
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
        })
    },[page])
useEffect(()=>{
    setsearchParams({page})
},[page,searchparams])

    console.log(data)
    return(
        <div>
            {state.token && <h3>Token:{state.token}</h3>}
            {loading && <div>...loading</div>}
        <div>
            <button disabled={page===1} onClick={()=>{
                setPage(page-1)
            }}>Pre</button>
         <button disabled={page===data?.total_pages} onClick={()=>{
             setPage(page+1)
         }}>Next</button>
       
        </div>
      {data?.data.map((item)=>{
          return(
          <div key={item.id}>
              <div>Name:{item.first_name}</div>
              <div>Email:{item.email}</div>
              <Link to={`/users/${item.id}`}>Show more </Link>
              
            

          </div>
          )
      })
    }
        </div>
    )
}