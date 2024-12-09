
import { HiDotsVertical, HiHome, HiPlus, HiStar } from "react-icons/hi";
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
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
            <img src={Logo} className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8'>
                {/*Maping in the menu*/}
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, index) => index<3&&(
                    <HeaderItem name={' '} Icon={item.icon} />
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={' '} Icon={HiDotsVertical} />
                    {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                        {menu.map((item, index) => index>2&&(
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                    </div>:null}
                </div>
            </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
