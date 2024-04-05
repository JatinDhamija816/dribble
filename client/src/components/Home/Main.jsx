import React from 'react'
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
const Main = () => {

    return (
        <div className='min-h-fit m-10'>
            <div className='w-3/6  m-auto text-center'>
                <div >
                    <h1 className='text-3xl  font-bold'>Please verify Your email...</h1>
                </div>
                <div>
                    <MarkEmailReadTwoToneIcon className='scale-150 m-8' />
                </div>
                <div className='text-gray-500'>
                    <div className='m-3'>
                        <p>Please verify your email address. We've sent a confirmation email</p>
                    </div>
                    <div className='m-3'>
                        <p className='m-3'>Click the confirmation link in that email to begin using dribble</p>
                        <p className='m-3'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.If you still don't see it,you can <span className='text-pink-500 hover:cursor-pointer'>resend the confirmation email</span></p>
                    </div>
                    <div className='m-3'>
                        <p className='m-3'> Wrong email address? <span className='hover:cursor-pointer text-pink-500'>Change it.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
