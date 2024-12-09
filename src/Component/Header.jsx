
import { HiHome, HiPlus, HiStar } from "react-icons/hi";
import Logo from "../assets/images/logo.png";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: "Home",
            icon: HiHome
        },

        {
            name: "Search",
            icon: HiMagnifyingGlass
        },

        {
            name: "Watch List",
            icon: HiPlus
        },

        {
            name: "Originals",
            icon: HiStar
        }, 

        {
            name: "Movies",
            icon: HiPlayCircle
        },

        {
            name: "Series",
            icon: HiTv
        }
    ]

  return (
    <div>
        <div>
            <img src={Logo} alt="" />
            <div>
                {/*Maping in the menu*/}
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Header
