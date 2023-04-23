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
  