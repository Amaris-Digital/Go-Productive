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
  
  const Navbar:React.FC<Props> = ({ setUser, user, onLogout }) => {

    function handleLogoutOnClick(): void {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
      <div>
        
      </div>
    )
  }
  
  export default Navbar
  