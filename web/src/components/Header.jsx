// import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import {HashLink} from  "react-router-hash-link"  ////in node terminal(backhand) npm i react-router-hash-link

const Header = () => {
  return (
   <nav>
    <h1>ThecyStar.</h1>
    <main>

        
       {/* <NavLink to={"/"}>Home</NavLink> 
       <NavLink to={"/Contact"}>Contact</NavLink>     
        <NavLink to={"/#About"}>About</NavLink> 
        <NavLink to={"/#Brands"}>Brands</NavLink> 
        <NavLink to={"/Services"}>Services</NavLink>  */}



{/* {HashLink} ksi b page pe bina scrol k le jaa h WoW  */}

        <HashLink to={"/#home"}>Home</HashLink> 
       <Link to={"/Contact"}>Contact</Link>     
        <HashLink to={"/#About"}>About</HashLink> 
        <HashLink to={"/#Brands"}>Brands</HashLink> 
        <Link to={"/Services"}>Services</Link> 
    </main>
   </nav>
  )
}

export default Header
