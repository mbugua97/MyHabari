import React from 'react';
import ImageDisplayComponent from './image.component';
import photos from '../assets/images/photos';

const Root_url = import.meta.env.VITE_API_URL;
function DisplayUser({name,profile}) {
  return (
    <div>
     <div>
     {profile===null?
    <ImageDisplayComponent src={photos.darkuser} height="100px" />:
    <ImageDisplayComponent src={`${Root_url}${profile}`} height="100px" width={"100px"}/>}
     </div>
     <div>
        {name}
     </div>
    </div>
  );
}

export default DisplayUser;
