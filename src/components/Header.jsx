import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
function Header() {
    const [toggle, setTogle] = useState(false)

    const showSideMenu = () => {
        console.log('clicked')
        setTogle(true);
    }
    const hideSideMenu = () => {
        setTogle(false);
    }
    const links = [
        {
            icons:<FaSearch />,
            name:"Search"
        },
        {
            icons:<RiDiscountPercentFill />,
            name:"Discount",
            sup: "New"
        },
        {
            icons: <IoMdHelpCircle/>,
            name:"Help"
        },
        {
            icons: <FaUser/>,
            name:"Signin"
        },
        {
            icons: <LuShoppingBag/>,
            name:"Cart",
            sup:0
        }
    ]
  return (
    <>
    <div className='black-overlays w-full h-full fixed duration-500 z-[999999] ' onClick={hideSideMenu} style={{
        opacity: toggle ? 1: 0,
        visibility: toggle ? 'visible' : 'hidden'
    }}>
        <div onClick={(e)=>{
            e.stopPropagation();
        }} className='w-[350px] bg-white h-full absolute duration-[500ms] pl-[20px] pr-[40px] pt-8' style={{
            left: toggle ? '0%': '-100%' 
        }}>
            <div className='p-2 text-[30px] '><IoMdClose onClick={hideSideMenu} className=' text-[#2f2f30] cursor-pointer'/></div>
            <div className='mt-8 border border-slate-300'>
                <input className='w-full p-3 text-[15px] font-bold' type="text" placeholder='Search for Area, Street name.....' />
            </div>
            <div className=' text-[#424242] cursor-pointer text-[16px] font-semibold gap-2 mt-8 p-5 hover:text-[#fc8019] border border-slate-300'> <h3 className=' flex items-center gap-3 '> <MdGpsFixed className='text-[20px]'/>	Get current location</h3> <p className='ml-[35px] font-[300] text-[13px] text-[#2f2f30]'>Using GPS</p>
            </div>

            <div className=' text-[#424242] cursor-pointer text-[16px] font-semibold gap-2 mt-8 p-5 hover:text-[#fc8019] border border-slate-300'> <p className='ml-[35px] mb-3 font-[300] text-[13px] text-[#2f2f30]'>RECENT SEARCH</p> <h3 className=' flex items-center gap-3 '> <RxCountdownTimer className='text-[20px]'/>	Jaipur</h3> <p className='ml-[35px] font-[300] text-[13px] text-[#2f2f30]'>Rajasthan, India</p>
            </div>
        </div>
    </div>
    <header className='p-[15px] shadow-xl text-[#2f2f30] sticky top-0 bg-white z-[999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className='w-[100px] '>
                <img src="images/logo.png" className='w-full' />
            </div>
            <div className=''>
                <span className='font-bold border-b-[3px] border-[black] mr-2'>Mansrover,</span>Jaipur , Rajasthan , India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#fc8019] cursor-pointer'/>
            </div>
            <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                {
                    links.map((links, index)=>{
                        return <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                            {links.icons}
                            {links.name}
                            <sup className='text-[#fc8019]'>{links.sup}</sup>
                        </li>
                    })
                }
                
            </nav>
        </div>

    </header>
    </>
  )
}

export default Header
