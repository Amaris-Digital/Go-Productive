import {Link} from "react-router-dom";


interface Props {
    user: {
      name: string;
      password: string;
    };
    setUser: React.Dispatch<React.SetStateAction<null>>;
    onLogout: () => void;
  }

  import React from 'react'
  
  const Navbar = ({ setUser, user, onLogout }) => {
    return (
      <div>
        
      </div>
    )
  }
  
  export default Navbar
  