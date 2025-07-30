import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center", // centers items horizontally
    alignItems: "center",     // centers items vertically
    gap: "20px",
    padding: "15px",
    backgroundColor: "#222",
    position: "sticky",       // stays at top
    top: 0,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 10px",
    borderRadius: "4px",
    transition: "background 0.3s",
  };

  const linkHover = {
    backgroundColor: "#444",
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/usestate">useState</Link>
      <Link style={linkStyle} to="/usestateinput">useState Input</Link>
      <Link style={linkStyle} to="/useeffect">useEffect</Link>
      <Link style={linkStyle} to="/usecontext">useContext</Link>
      <Link style={linkStyle} to="/useref">useRef</Link>
      <Link style={linkStyle} to="/usememo">useMemo</Link>
      <Link style={linkStyle} to="/toggle-theme">Toggle Theme</Link>
      <Link style={linkStyle} to="/usecallback">useCallback</Link>
      <Link style={linkStyle} to="/usereducer">useReducer</Link>
    </nav>
  );
};

export default Navbar;
