import Navbar from "./Navbar";
import "./styles.css";

interface Props {
  user: {
    name: string;
    password: string;
  };
  setUser: React.Dispatch<React.SetStateAction<null>>;
  onLogout: () => void;
}

import React from "react";

const Header: React.FC<Props> = ({ user, setUser, onLogout }) => {
  return (
    <div className="header-background">
      <h1 className="header">Plan Your Tasks</h1>
      <Navbar user={user} setUser={setUser} onLogout={onLogout} />
    </div>
  );
};

export default Header;
