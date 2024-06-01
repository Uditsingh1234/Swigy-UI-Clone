import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
import { FaChevronUp, FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function OnlineDelivery() {
    const [data, setData] = useState()

    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if(componentRef.current){
                const react = componentRef.current.getBoundingClientRect();
                setIsAtTop(react.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [ ]); 

    const fetchTopRestaurant = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains")
        const apidata = await response.json();
        setData(apidata);
    }

    useEffect(
        () =>{
            fetchTopRestaurant();
        }, []
    )
  return (
    <div className='max-w-[1200px] mx-auto 'ref={componentRef}>
                <div className='flex my-5 items-center justify-between'>
                    <div className='text-[25px] font-bold mb-5'>Restaurants with online food delivery in Jaipur</div> 
                </div>
                <div className={isAtTop ? 'fixed top-2 z-[9999] bg-white w-full left-0 ': ''}>
                    <div className='max-w-[1200px] mx-auto flex my-4 gap-3 flex-wrap items-center relative '>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow flex items-center gap-2 cursor-pointer '>Filter <FaFilter/></div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow flex items-center gap-2 cursor-pointer'
                         onClick={()=>setIsOpen((prev)=>!prev)}>Sort by 
                         {!isOpen ? (<FaChevronDown/>): (<FaChevronUp/>)} 
                         </div>
                         {isOpen && (
                            <div className='bg-white absolute top-10 left-20  z-30 text-[15px] rounded-[17px] border shadow-md'>
                                <div className='text-slate-700 text-[16px] font-[450] p-5 space-y-4'>
                                <div className='flex justify-between'><h3>Relevance <br />(default)</h3> <input type="radio" className=" ml-2" name="options" value="option1" /></div>
                                <div className='flex justify-between'><h3>Delivery Time</h3> <input type="radio" className=" ml-2" name="options" value="option1" /></div>
                                <div className='flex justify-between'><h3>Rating</h3> <input type="radio" className=" ml-2" name="options" value="option1" /></div>
                                <div className='flex justify-between'><h3>Cost: Low to High</h3> <input type="radio" className=" ml-2" name="options" value="option1" /></div>
                                <div className='flex justify-between'><h3>Cost: High to Low</h3> <input type="radio" className=" ml-2" name="options" value="option1" /></div>

                                </div>
                                <div className='text-red-500 text-[16px] font-[500]  cursor-pointer border-t-2 border-slate-200 p-2'>Apply</div>
                            </div>
                         )}
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Fast delivery</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>New to Swigy</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Rating 4.0+</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Pure Veg</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Offers</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Rs. 300 - Rs.600</div>
                        <div className='p-2 text-slate-700 font-[500] rounded-[30px] border border-slate-300 shadow cursor-pointer '>Less then Rs. 300</div>
                    </div>
                </div>
                <div className='md:grid grid-cols-4 gap-3'>
                    {
                        data && data.map(
                            (d,i)=>{
                                return <Card {...d}/>
                            }
                        )
                    }
                </div>
                <hr className='my-6 border-[2px]' />
    </div>
    
  )
}

export default OnlineDelivery
