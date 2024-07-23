import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ImageDisplayComponent from '../../components/image.component';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form.component';
import { tokenToCSSVar } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import photos from '../../assets/images/photos';
import DisplayUser from '../../components/user.component';
import axios from 'axios';
import { loginSuccess } from '../../app/userSlice';
import SearchComponent from '../../components/searchComponent';

import './index.css';

const AppsettingsPage = () => {
  const Root_url = import.meta.env.VITE_API_URL;

  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("MH_TKN");

        // Fetch users
        const usersResponse = await axios.get(`${Root_url}/Users`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { page }
        });
        setUsers(usersResponse.data.data);

        // Fetch posts
        const postsResponse = await axios.get(`${Root_url}/content`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { page }
        });
        setTotalPosts(postsResponse.data.data.length); // Assuming totalPosts is the length of the array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setRefresh(false);
      }
    };

    fetchData();
  }, [page, refresh]); // Added 'page' dependency to refetch when page changes

  const handleRefresh = () => {
    setRefresh(true);
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='Appsettings'>
      <div className='userDemograph'>
        <div className='ActiveUsers'>
          <p className='bebas-neue-regular'>Active Users</p>
          <ImageDisplayComponent src={photos.group}/>
        <div className='bebas-neue-regula'>
          {users.length}
        </div>
        </div>
        <div className='postdemograph'>
          <p className='bebas-neue-regular'>Live Posts</p>
          <ImageDisplayComponent src={photos.PostPhoto} height={"200px"}/>
          <div className='bebas-neue-regula'>
          {totalPosts}
         </div>  
        </div>
      </div>
      <button className="refreshButton" onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default AppsettingsPage;
