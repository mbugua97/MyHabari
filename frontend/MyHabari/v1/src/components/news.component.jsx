import React from 'react';
import {Img,Input, others} from '@chakra-ui/react'
import ImageDisplayComponent from './image.component';
import photos from '../assets/images/photos';

function DisplayNews({profilesrc,title,content,owner}) {
  return (
        <div className='news-item'>
        <div>
            <div>
            {profilesrc===null?
               <ImageDisplayComponent src={photos.darkuser} height="200px" />:
                <ImageDisplayComponent src={profilesrc} height={"50px"} />
                }
            {owner}
        </div>
        </div>
        <div className='title'>{title}</div>
        <br/>
        <div className='content'>{content}</div>
        </div>

  );
}
export default DisplayNews;
