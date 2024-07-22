import React from 'react';
import { Img } from '@chakra-ui/react';
import ImageDisplayComponent from './image.component';
import photos from '../assets/images/photos';
import './news.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const Root_url = import.meta.env.VITE_API_URL;
const token = Cookies.get("MH_TKN");

function DisplayNews({ live, profilesrc, title, content, owner, deletedit, Did, onDelete }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${Root_url}/content/${Did}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        onDelete(Did);
      } else {
        console.error('Failed to delete the news item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='news-item'>
      <div>
        <div className='news-item-header'>
          <div>
            {profilesrc === null ? (
              <ImageDisplayComponent src={photos.darkuser} height="200px" />
            ) : (
              <ImageDisplayComponent src={profilesrc} height={"50px"} />
            )}
          </div>
          <div>{owner}</div>
          <div>
            {live === true ? (
              <ImageDisplayComponent src={photos.live} height={"50px"} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className='title'>{title}</div>
      <br />
      <div className='content'>{content}</div>

      {deletedit === true ? (
        <div className='actions'>
          <div className='edit'>
            <button>
              <ImageDisplayComponent src={photos.edit} height={"30px"} />
            </button>
          </div>
          <div>
            <button className='delete' onClick={handleDelete}>
              <ImageDisplayComponent src={photos.dele} height={"30px"} />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DisplayNews;
