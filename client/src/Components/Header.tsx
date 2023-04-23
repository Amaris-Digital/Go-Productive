import Navbar from "./Navbar"
import "./styles.css"

interface Props {
    user:{
      name: string
      password: string
    }
    setUser: React.Dispatch<React.SetStateAction<null>>
    onLogout: () => void
  }
  

  import React from 'react'
  
  const Header:React.FC<Props> = ({user, setUser, onLogout}) => {
    return (
      <div>
        
      </div>
    )
  }
  
  export default Header
  