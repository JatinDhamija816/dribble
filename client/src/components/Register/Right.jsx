import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Right = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [policy, setPolicy] = useState(false)
    const [user, setUser] = useState([])
    const [passerror, setPassError] = useState('');
    const [error, setError] = useState('');
    const Register = async (e) => {
        e.preventDefault()
        if (!name || !username || !email || !password || !policy) {
            alert('Please fill all the details')
            return
        }
        if (password.length < 6) {
            setPassError('Password Length must be greater than 6')
            return
        }
        if (policy === false) {
            setError('You must agree to the Terms of Service')
            return;
        }

        await axios.post('https://dribble-6079.onrender.com/register', { name, username, email, password, policy })
            .then((response) => { setUser([...user, response.data]) })
            .catch(err => console.log(err))
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
        setPolicy(!policy)
        setPassError('')
        setError('')
        alert('User Register Successfully')
        navigate('/profile')
    }
    return (
        <div className="min-h-screen w-3/5">
            <div className="text-right m-2 p-2 px-2">
                <p className="font-semibold">Already a member? <span className="font-normal text-blue-300 hover:cursor-pointer">Sign in</span></p>
            </div>
            <div className=" w-4/6 m-auto p-2 my-2">
                <h1 className='font-bold text-2xl p-4'>Sign up to Dribble</h1>
                <div>
                    <div className="flex">
                        <div className=" m-2 p-2 w-1/2">
                            <div><label className="font-semibold">Name</label></div>
                            <div><input type="text" className="border w-full p-2 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                        </div>
                        <div className="m-2 p-2 w-1/2">
                            <div><label className="font-semibold">Username</label></div>
                            <div><input type="text" className="border w-full p-2 rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)} required /></div>
                        </div>
                    </div>
                    <div>
                        <div className="m-2 p-2 ">
                            <div><label className="font-semibold">Email</label></div>
                            <input type="email" className="border w-full p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div>
                        <div className="m-2 p-2 ">
                            <div><label className="font-semibold">Password</label></div>
                            <input type="password" className="border w-full p-2 rounded-lg" placeholder="6+ characters" value={password} onChange={(e) => setPassword(e.target.value)} required />{passerror && <p style={{ color: 'red' }} >{passerror}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="m-2 p-2 ">
                            <p><input type="checkbox" value={policy} onChange={() => setPolicy(true)} required /> I agree with Dribbble's <span className="text-blue-400 hover:cursor-pointer">Terms of Service</span>, <span className="text-blue-400 hover:cursor-pointer">Privacy Policy</span>, and default  <span className="text-blue-400 hover:cursor-pointer">Notification Settings</span>.</p>{error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="m-2 p-2">
                            <button className="bg-pink-600 border-none rounded-lg text-white p-2 px-8" onClick={Register}>Create Account</button>
                        </div>
                    </div>
                    <div>
                        <div className="m-2 p-2">
                            <p>This site is protected by reCAPTCHA and the Google <span className="text-blue-400 hover:cursor-pointer">Privacy Policy</span> and <span className="text-blue-400 hover:cursor-pointer">Terms of Service</span> apply</p>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Right