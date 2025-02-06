"use client"
import { useEffect } from "react"

function Users() {

    useEffect(()=>{
        alert('loaded!')
    },[])

  return (
    <div>Hola Socio</div>
  )
}

export default Users