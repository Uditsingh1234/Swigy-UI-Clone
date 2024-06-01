import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Category() {
    const [slide, setSlide] = useState(0)
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories")
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )
    
    const nextSlide = ()=>{
        console.log(categories.length)
        if(categories.length-8 == slide) return false;
        setSlide(slide + 3)
    }
    const prevSlide = ()=>{
        if(slide == 0) return false;
        setSlide(slide - 3)
    }
    // onClick={nextSlide} onClick={prevSlide}

    return (
        <>
            <div className='max-w-[1200px] mx-auto '>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>What's on your mind!</div> 
                    <div className='flex'>
                        <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide} ><FaChevronLeft/></div>
                        <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide} ><FaChevronRight /></div>
                    </div>
                </div>
                <div className='flex  overflow-hidden '>
                {
                    categories.map(
                        (cat, index) => {
                            return (
                                <div style={{
                                    transform : `translateX(-${slide * 100}%)`
                                }
                                } key = {index} className='w-[150px] shrink-0 duration-150'>
                                    <img src={"http://localhost:5000/images/" + cat.image} />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <hr className='my-6 border-[2px]' />
            </div>
            
        </>
    )
}

export default Category
