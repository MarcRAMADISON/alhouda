import { useState } from "react";
import "./menuBarStyle.css";
import { Button } from "@mui/material";
import PayementModal from "../payementModal/payementModal";
import {useNavigate} from "react-router-dom"

const MenuBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()

  const handleClickMenuItems = (link) => {
    navigate(link);
  };

  const handlePayement=()=>{
    setOpen((prev)=>!prev)
  }

  return (
    <div className="container">
      <div className="menuBar">
        <img
          src="./icones/burger_menu.png"
          alt="burger menu"
          className="burgerMenu"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      </div>
      {toggleMenu ? (
        <>
        <div className="menu2">
          <div
            className={
              document.location.pathname === "/" ? "activeLink" : "menuText"
            }
            onClick={() => handleClickMenuItems("/")}
          >
            Accueil
          </div>
          <div
            className={
              document.location.pathname === "/actuality"
                ? "activeLink"
                : "menuText"
            }
            onClick={() => handleClickMenuItems("/actuality")}
          >
            Actualité
          </div>
          
           <Button variant='contained' onClick={handlePayement}>Faire un don</Button>

        </div>
        <PayementModal open={open} setOpen={setOpen}/>
        </>
        
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuBar;
