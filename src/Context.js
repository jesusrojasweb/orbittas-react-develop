import React, { createContext, useState, useEffect } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const [proyects, setProyects] = useState([])
  const [users, setUsers] = useState([])

  const value = {
    proyects,
    handleProyects: (proyectInfo)=>{
      setProyects(proyectInfo)
    },
    users,
    handleUsers: (usersInfo)=>{
      setUsers(usersInfo)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
