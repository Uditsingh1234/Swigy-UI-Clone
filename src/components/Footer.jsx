import React from 'react'

function Footer() {
  return (
    <div>
        <div className='p-5  bg-[#f0f0f5] lg:flex items-center justify-center '>
            <div className=' xl:w-[504px] flex  md:justify-center sm:w-full sm:justify-center text-[28px] font-[800] text-[#02060cbf] leading-tight mr-[100px]'>For better experience,download the Swiggy app now</div>
            <div className='flex gap-6 md:mt-6 md:justify-center sm:justify-center  sm:mt-[25px]'>
                <img className='w-[201px] cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                <img className='w-[201px] cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
            </div>
        </div>
    <footer className='bg-black text-[#ffffff99] flex sm:flex-wrap  justify-center gap-2 pt-9 pb-[100px]'>
        <div className='p-5 w-[262px]'>
            <img className='w-[150px] mb-4' src="images/Fotter.png" alt="" />
            <p>@ 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className='p-5 text-[#ffffff99] text-[16px] w-[262px] grid  '>
            <h1 className='text-2xl mb-4 font-bold text-white '>Company</h1>
            <ul className='space-y-4'>
                <li>Abput</li>
                <li>Career</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
            </ul>
        </div>
        <div className='p-5 text-[#ffffff99]text-[16px]  w-[262px] '>
            <h1 className='text-2xl mb-4 font-bold text-white '>Contact Us</h1>
            <ul className='space-y-4 pb-9'>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
            </ul>

            <h1 className='mt-4 text-2xl mb-4 font-bold text-white '>Legal</h1>
            <ul className='space-y-4'>
                <li>Terms & Condition</li>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Inverstor Relation</li>
            </ul>
        </div>
        <div className='p-5 text-[#ffffff99] text-[16px] w-[262px] '>
            <h1 className='text-2xl mb-4 font-bold text-white '>We deliver to:</h1>
            <ul className='space-y-4' >
                <li>Banglore</li>
                <li>Gurgown</li>
                <li>Pune</li>
                <li>Hedrabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
            </ul>
        </div>
        
    </footer>
    </div>
  )
}

export default Footer
