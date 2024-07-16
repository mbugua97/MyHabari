import React from 'react';
import './sidebar.layout.css'
import ImageDisplayComponent from '../components/image.component';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../app/pageSlice';
import NotificationPage from '../pages/Notification/notification.page';

import photos from '../assets/images/photos';

const SidbarLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return( 
<div className='sidebarWrapper'>

<div>
    <button onClick={() => dispatch(setPage('home'))}>
    <ImageDisplayComponent src={photos.darkuser} height={"50px"}/>
    </button>
</div>
<br/>
<button onClick={() => dispatch(setPage('users'))}>users</button>
<br/>
<button onClick={() => dispatch(setPage('news'))}>news</button>
<br/>
<button onClick={() => dispatch(setPage('setting'))}>settings</button>
<br/>
<button onClick={() => dispatch(setPage('notification'))}>Notifications</button>
</div>
)}

export default SidbarLayout