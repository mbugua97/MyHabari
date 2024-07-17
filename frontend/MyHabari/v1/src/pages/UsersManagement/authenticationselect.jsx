//select which authentication scheme to use

import React from 'react';
import { Link } from 'react-router-dom';

import ImageDisplayComponent from '../../components/image.component';
import photos from '../../assets/images/photos';

import './authenticationtype.css'
const SelectAuthenticationType = () => {
  return (
    <div className='authtype'>
        <div className='applogo'>
            <ImageDisplayComponent src={photos.applogo} height={"100px"}/>
        </div>
        <div className='email'>
        <Link to="/login">  log in with Email</Link>
        </div>
        <div className='socialauth'>
        <div className='googlesocial'>
        <ImageDisplayComponent src={photos.googlephoto} height={"70px"}/>
        </div>

        <div className='gitsocial'>
        <ImageDisplayComponent src={photos.githublogo} height={"60px"}/>
        </div>
        </div>

        <div className='register'>
            <p>Don't have an account?</p>
            <Link to="/register">
                
        <button className='registerbutton'> Register </button></Link>
        </div>
    </div>
  );
};

export default SelectAuthenticationType
