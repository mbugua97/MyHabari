import React, { useState,useRef } from 'react';
import ImageDisplayComponent from '../../components/image.component';
import { useSelector,useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form.component'; // Adjust the import according to your project structure
import { tokenToCSSVar } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import photos from '../../assets/images/photos';
import axios from 'axios';
import './user.profile.css'
import { loginSuccess } from '../../app/userSlice';


const Root_url=import.meta.env.VITE_API_URL;

const AboutPage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const url = `${Root_url}/user?User_id=${user.id}`;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const UpdateProfile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const token = Cookies.get("MH_TKN");
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePic', file);
      try {
        setUploading(true);
        setError(null);
        const response = await axios.patch(`${url}`, formData, {
          headers: {
            'Authorization': `Bearer ${token}` ,
            'Content-Type': 'multipart/form-data',
          },
        });
        const user=response.data
        dispatch(loginSuccess(user))

      } catch (err) {
        console.error('Error uploading file:', err);
        setError('Error uploading file.');
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="App">
    <button onClick={UpdateProfile} className="profilephoto">
    {user.profilePic===null?
    <ImageDisplayComponent src={photos.darkuser} height="200px" />:
    <ImageDisplayComponent src={`${Root_url}${user.profilePic}`} height="200px" />}
      <div className="middle-profilepic">
        <div className="text-profilepic">Change profile</div>
      </div>
    </button>
    <input
        type="file"
        ref={fileInputRef}
        className="hidden-file-input"
        onChange={handleFileChange}
        accept="image/*"
      />
    <br />
    {user.Name}
    <br />
    {user.Email}
  </div>
  );
};
export default AboutPage;
