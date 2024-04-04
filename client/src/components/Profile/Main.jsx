import Profile2 from "./Profile2";
import Profile from "./Profile";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const Main = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({});
    const handleNextPage1 = (data) => {
        setFormData({ ...formData, ...data });
    };
    const handleSubmit = async (data) => {
        const temp = { ...formData, ...data }
        setFormData(temp);
        try {
            await axios.post('http://localhost:8000/profile', temp, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Data Submited successfully');
        } catch (error) {
            console.error('Error while submit data:', error);
        }
        navigate('/home')
    };
    return (
        <div>
            {!formData.image && <Profile onNext={handleNextPage1} />}
            {formData.image && <Profile2 onSubmit={handleSubmit} />}
        </div>
    )
}
export default Main
