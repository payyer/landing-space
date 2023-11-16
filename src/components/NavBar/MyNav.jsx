import React from 'react'

export default function MyNav() {
    return (
        <nav className='max-w-full  bg-color-1 text-white'>
            <div className='flex justify-between items-center max-w-6xl mx-auto h-20 '>
                <h1><a href='#' className=' font-bold text-2xl'>{`{`} Finsweet</a></h1>
                <div>
                    <ul className='flex gap-6  text-lg items-center'>
                        <li><a href="" className=' hover:opacity-80'>Home</a> </li>
                        <li><a href="" className=' hover:opacity-80'>Blog</a> </li>
                        <li><a href="" className=' hover:opacity-80'>About Us</a> </li>
                        <li><a href="" className=' hover:opacity-80'>Contact us</a> </li>
                        <li className=' ml-3 h-14 w-44 bg-white hover:opacity-80 rounded'>
                            <a href=""
                                className='text-black flex items-center justify-center h-full  font-bold' >
                                Subcribe
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}  
