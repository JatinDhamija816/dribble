import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
    return (
        <div className='bg-slate-200 min-h-fit flex justify-around'>
            <div className='w-1/6 m-5'>
                <h1 className='text-2xl font-mono font-bold text-pink-500 m-3'>dribble</h1>
                <p className='m-3'>Dribble is the world's leading community for creatives to share,grow,and get hired</p>
                <div className=''>
                    <TwitterIcon className='m-2' />
                    <FacebookIcon className='m-2' />
                    <InstagramIcon className='m22' />
                    <PinterestIcon className='m-2' />
                </div>
            </div>
            <div className='w-5/6 flex justify-around'>
                <div className='w-1/6 m-5'>
                    <h2 className='font-bold m-2'>For designers</h2>
                    <ul>
                        <li className='m-2'>Go Pro</li>
                        <li className='m-2'>Explore design work</li>
                        <li className='m-2'>Design blog</li>
                        <li className='m-2'>Overtime podcast</li>
                        <li className='m-2'>Playoffs</li>
                        <li className='m-2'>Weekly Warm-Up</li>
                        <li className='m-2'>Refer a friend</li>
                        <li className='m-2'>Code of conduct</li>
                    </ul>
                </div>
                <div className='w-1/6 m-5'>
                    <div>
                        <h2 className='font-bold m-2'>Hire designers</h2>
                        <ul>
                            <li className='m-2'>Post a job opening</li>
                            <li className='m-2'>Post a freelance project</li>
                            <li className='m-2'>Search for designers</li>
                            <li className='m-2'>Overtime podcast</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold m-2'>Brands</h2>
                        <ul>
                            <li className='m-2'>Advertise with us</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/6 m-5'>
                    <h2 className='font-bold m-2'>Company</h2>
                    <ul>
                        <li className='m-2'>About</li>
                        <li className='m-2'>Careers</li>
                        <li className='m-2'>Support</li>
                        <li className='m-2'>Media Kit</li>
                        <li className='m-2'>Testimonials</li>
                        <li className='m-2'>API</li>
                        <li className='m-2'>Terms of service</li>
                        <li className='m-2'>Privacy policy</li>
                        <li className='m-2'>Cookie policy</li>
                    </ul>
                </div>
                <div className='w-1/6 m-5'>
                    <div>
                        <h2 className='font-bold m-2'>Directories</h2>
                        <ul>
                            <li className='m-2'>Design jobs</li>
                            <li className='m-2'>Designers for hire</li>
                            <li className='m-2'>Freenlance designers for hire</li>
                            <li className='m-2'>Tags</li>
                            <li className='m-2'>Places</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold m-2'>Design assests</h2>
                        <ul>
                            <li className='m-2'>Dribble Marketplace</li>
                            <li className='m-2'>Creative Market</li>
                            <li className='m-2'>Footspring</li>
                            <li className='m-2'>Font Squirrel</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/6 m-5'>
                    <h2 className='font-bold m-2'>Design Resoures</h2>
                    <ul>
                        <li className='m-2'>Freelancing</li>
                        <li className='m-2'>Design Hiring</li>
                        <li className='m-2'>Design Portfolio</li>
                        <li className='m-2'>Design Education</li>
                        <li className='m-2'>Creative Process</li>
                        <li className='m-2'>Design Industry Trends</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer
