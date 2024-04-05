import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
const Navbar = () => {
    return (
        <div className='border flex justify-between py-2'>
            <div className='flex justify-end text-center content-center'>
                <div className=" flex content-center justify-center">
                    <h1 className='text-2xl font-mono px-2 m-2 font-bold'>dribble</h1>
                </div>
                <div >
                    <ul className='px-2 text-gray-600 font-semibold flex justify-center text-center'>
                        <li className='m-2 px-2 hover:cursor-pointer'>Insipiration</li>
                        <li className='m-2 px-2 hover:cursor-pointer'>Find Work</li>
                        <li className='m-2 px-2 hover:cursor-pointer'>Learn Design</li>
                        <li className='m-2 px-2 hover:cursor-pointer'> Go Pro</li>
                        <li className='m-2 px-2 hover:cursor-pointer'>Hire Designer</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-end text-center px-2 mx-2 content-center'>
                <div className='border rounded-lg m-1 bg-slate-200 flex justify-center text-center p-1 '>
                    <SearchIcon className='hover:cursor-pointer' />
                    <input type="text" placeholder='Search' className=' bg-slate-200 w-full' />
                </div>
                <div className='p-1 flex-auto justify-center content-center'>
                    <WorkHistoryOutlinedIcon className='hover:cursor-pointer' />
                </div>
                <div className='p-1'>
                    <img className='hover:cursor-pointer min-w-10 border max-h-10 rounded-full' src="https://images.unsplash.com/photo-1711861413115-797ee0655214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                </div>
                <div className='p-1'>
                    <button className="bg-pink-600 border-none rounded-lg text-white p-2 px-8">Upload</button>
                </div>
            </div>
        </div >
    )
}

export default Navbar
