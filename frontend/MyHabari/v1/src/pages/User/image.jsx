import React from 'react';
import './user.profile.css';

const ImageUpload = ({ photos }) => {
  return (
    <button className='profilephoto'>
      {/* <img src={photos.darkuser} alt="User" style={{ height: "200px" }} /> */}
      <div className="middle-profilepic">
        <div className="text-profilepic"><i className="fas fa-camera"></i></div>
        <div className="text-profilepic">Change it</div>
      </div>
    </button>
  );
};

export default ImageUpload;
