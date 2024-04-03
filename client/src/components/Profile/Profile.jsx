import { useState } from 'react';
import axios from 'axios';
const Profile = () => {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('location', location);
        try {
            await axios.post('http://localhost:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setImage('')
        setLocation('')
    };
    return (
        <div>
            <div className="text-pink-400 m-4 text-xl font-mono p-5">
                dribble
            </div>
            <div className=" w-4/6 mx-auto ">
                <div className="m-2">
                    <h1 className="text-3xl font-bold p-2">Welcome! Let's create your profile</h1>
                    <p className="p-2 text-gray-500">Let others get to know you better! You can do these later</p>
                </div>
                <div className="m-2">
                    <h3 className='p-2 font-bold'>Add an avatar</h3>
                    <div className='flex p-2 my-3'>
                        {
                            image ? (<img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className='rounded-full border-dotted w-48 h-48'
                            />) : (<div className='border border-dashed border-zinc-950 rounded-full min-h-48 min-w-48'></div>)
                        }
                        <div className='p-4 m-3'>
                            <input type="file" id="image" onChange={handleImageChange} accept="image/*" />
                        </div>
                    </div>
                    <div className='p-2 flex-row'>
                        <div>
                            <label className='p-2 font-bold'>Add Your location</label>
                        </div>
                        <div>
                            <input type="text" className='border-b w-full my-3 p-2' placeholder='Enter a location' value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <button className="bg-pink-600 border-none rounded-lg text-white p-2 px-20" onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
