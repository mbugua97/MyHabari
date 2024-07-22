import './index.css'
import { useDispatch,useSelector } from 'react-redux';

import {Textarea} from '@chakra-ui/react'

import { loginSuccess } from '../../../app/userSlice';

import FormInput from '../../../components/form.component';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom';
import ImageDisplayComponent from '../../../components/image.component';
import photos from '../../../assets/images/photos';

const token=Cookies.get("MH_TKN")

const Write = () => {
  const Root_url=import.meta.env.VITE_API_URL;
  const owner_id = useSelector((state) => state.user.user.id);
const category=1
  const dispatch = useDispatch();
  const url=Root_url+'content'
  const [content_title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const post = async () => {
      try {
        setError('');
        const requestData = {
          content_title,
          content,
          owner_id,
          category,
      };
      
      const response = await axios.post(
        url,  
        requestData, 
        {
            headers: {
                'Authorization': `Bearer ${token}`,  
            }
        }
    );
    setTitle('');
    setContent('');

      } catch (err) {
        setError(`${url}`);
        console.log(err);
      } 
      finally {
        setIsSubmitting(false);
      }
    };
    if (isSubmitting) {
      post();
    }

 }, [isSubmitting,content_title,content]); 

  const handlePublish = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
  };



  return( 
    <div className='NewContent'>
      <div className='PublishContent'>
    {error}
    <form onSubmit={handlePublish}>
      <FormInput label="Title" type="text"  value={content_title} onChange={(e) => setTitle(e.target.value)} required />
  Content:
      <Textarea className="paragraph" type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
    <br/>
     
      <button className='publish' type="submit" >
      {isSubmitting ? 
      <ImageDisplayComponent className='loadingSvg' src={photos.loading} height={"30px"}/>
      : 'publish'
      }
      </button>
    </form>
    </div>
  </div>












);
}

export default Write