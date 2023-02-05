import{BiSearch ,BiMenu, BiUser} from "react-icons/bi"
import{MdOutlineCancel} from "react-icons/md"
import{BsSun , BsMoonFill} from "react-icons/bs"
import { useState,useRef, useEffect } from "react";
import { Turn as Hamburger } from 'hamburger-react'

const NavBar = () => {
    const [ToggleMenu, setToggleMenu] = useState(false)
    const [ToggleThemeColour, setToggleThemeColour] = useState(false)
    const [ToggleSearch, setToggleSearch] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const ref =useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
         if(ref.current && !ref.current.contains(event.target)){setToggleMenu(false),setToggleSearch(false)}
         
        }
        document.addEventListener("mousedown",handleClickOutside);
        return()=>{
         document.removeEventListener("mousedown",handleClickOutside);
        };
      
     }, [ref])
    return ( 
        <nav className="navBar grid">
            <hr/>
            <div className="grid mainNavbar">
                <div className="pageLogo-div ">
                    <img src="image/companyimage.png" alt="company's logo"/>
                </div>
                <div
                ref={ref}
                 className={`search ${ToggleSearch?"toggleSearchOn":"toggleSearchOff"}`}>
                    <form >
                        <input 
                        type="text"
                        placeholder="Search.."
                        />
                        <BiSearch size={18}></BiSearch>
                    </form>
                </div >
                <div >
                <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div ref={ref} className={`navigation-btn  ${isOpen? "menu-visibity-on":"menu-visibity-off" }`}>
                    <a href="/">home</a>
                    <a href="/About">about</a>
                    <a href="/Projects">projects</a>
                    <a href="/blogs">blogs</a>
                    <a href="/Contact">contact</a>
                    <div>
                        <a><BiUser size={18}></BiUser></a>
                        {
                            ToggleThemeColour?
                            <BsMoonFill onClick={()=>{setToggleThemeColour(!ToggleThemeColour)}} size={18}></BsMoonFill>:
                            <BsSun onClick={()=>{setToggleThemeColour(!ToggleThemeColour)}} size={18}></BsSun>
                            
                        }
                        <BiSearch className="searchToggle" onClick={()=>setToggleSearch(!ToggleSearch)} size={18}></BiSearch>
                    </div>
                    <hr/>

                </div>
            </div>
            
        </nav>
     );
}
 
export default NavBar;