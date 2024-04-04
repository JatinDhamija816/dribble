import { useState } from 'react'
const Profile2 = ({ onSubmit }) => {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ checkbox1, checkbox2, checkbox3 });
    };
    return (
        <div>
            <div className="text-pink-400 m-4 text-xl font-mono px-5 py-2">
                dribble
            </div>
            <div className='w-5/6 m-auto'>
                <div className='text-center '>
                    <h2 className='font-bold text-3xl p-1'>What brings you to Dribble?</h2>
                    <p className='text-gray-400 p-1'>
                        Select the options that best describe you. Dont't worry, you can explore other options later
                    </p>
                </div>
                <div className='flex justify-around m-5'>
                    <div className='border w-1/4   rounded-lg'>
                        <div className='flex justify-center'>
                            <img src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-h-2/6 w-3/5 py-2 rounded-3xl' alt="" />
                        </div>
                        <div>
                            <p className='p-2 font-bold text-center'>I'm a designer looking to share my work</p>
                        </div>
                        <div className='text-center'>
                            <input type="checkbox" checked={checkbox1} onChange={() => setCheckbox1(!checkbox1)} />
                        </div>
                    </div>
                    <div className='border w-1/4   rounded-lg'>
                        <div className='flex justify-center'>
                            <img src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-h-2/6 w-3/5 py-2 rounded-3xl' alt="" />
                        </div>
                        <div>
                            <p className='p-2 font-bold text-center'>I'm looking to hire a designer</p>
                        </div>
                        <div className='text-center'>
                            <input type="checkbox" checked={checkbox2} onChange={() => setCheckbox2(!checkbox2)} />
                        </div>
                    </div>
                    <div className='border w-1/4   rounded-lg'>
                        <div className='flex justify-center'>
                            <img src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-h-2/6 w-3/5 py-2 rounded-3xl' alt="" />
                        </div>
                        <div>
                            <p className='p-2 font-bold text-center'>I'm looking for design inspiration</p>
                        </div>
                        <div className='text-center'>
                            <input type="checkbox" checked={checkbox3} onChange={() => setCheckbox3(!checkbox3)} />
                        </div>
                    </div>
                </div>
                <div className='p-2 text-center'>
                    <button className="bg-pink-600 border-none rounded-lg text-white p-2 px-20" onClick={handleSubmit} >Finish</button>
                </div>
            </div>
        </div>
    )
}

export default Profile2
