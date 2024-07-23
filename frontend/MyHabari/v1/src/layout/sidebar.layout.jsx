import React from 'react';
import './sidebar.layout.css'
import ImageDisplayComponent from '../components/image.component';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../app/pageSlice';
import NotificationPage from '../pages/Notification/notification.page';

import photos from '../assets/images/photos';

const Root_url=import.meta.env.VITE_API_URL;

const SidbarLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return( 
<div className='sidebarWrapper'>

<div>
    <button onClick={() => dispatch(setPage('home'))}>
    {user.profilePic===null?
    <ImageDisplayComponent src={photos.darkuser} height="50px" />:
    <ImageDisplayComponent src={`${Root_url}${user.profilePic}`} height={"90px"} width={"90px"} />}
    </button>
</div>
<br/>
<button onClick={() => dispatch(setPage('news'))}>news</button>
<br/>
<button onClick={() => dispatch(setPage('Trending'))}>Trending</button>
<br/>

{user.Admin===true?
<button onClick={() => dispatch(setPage('settings'))}>app settings</button>
  :""}
  <br/>
{user.Admin===true?
  <button onClick={()=> dispatch(setPage('users'))}>manage users</button>
  :""}

<br/>
</div>
)}

export default SidbarLayout