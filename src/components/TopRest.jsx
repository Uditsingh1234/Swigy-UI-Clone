import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Card from './Card'

function TopRest() {
    const [slide, setSlide] = useState(0)
    const [data, setData] = useState()

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
    const nextSlide = () => {
        console.log("next:" + data.length);
        if(data.length-3 == slide) return false;
        setSlide(slide + 1);
      };
      const prevSlide = () => {
        console.log("back:" + data.length);
        if(slide == 0) return false;
        setSlide(slide - 1);
      };
  return (
    <div className='max-w-[1200px] mx-auto px-2'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Jaipur</div> 
                    <div className='flex'>
                        <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide} ><FaChevronLeft/></div>
                        <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide} ><FaChevronRight /></div>
                    </div>
                </div>
                <div className='flex gap-5 overflow-hidden'>
                    {
                        data && data.map(
                            (d, i) =>{
                                return <div style={{
                                    transform : `translateX(-${slide * 100}%)`
                                }}>
                                    <Card width= "w-full md:w-[273px]" {...d} key={i}/>
                                </div> 
                            }
                        )
                    }
                </div>
                <hr className='my-6 border-[2px] ' />
    </div>
    
  )
}

export default TopRest
