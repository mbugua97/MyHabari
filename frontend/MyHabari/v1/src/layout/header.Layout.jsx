import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../app/pageSlice';
import './header.layout.css'
import ImageDisplayComponent from '../components/image.component';



import photos from '../assets/images/photos';
import { logout } from '../app/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);


  return( 

<div className='headerWrapper'>

<div>
    <ImageDisplayComponent  src={photos.applogo} height={"50px"} width={"50px"} />
</div>


<div className='notificationLogout'>


<div className='Notifications'>
<button onClick={() => dispatch(setPage('notifications'))}>
<ImageDisplayComponent  src={photos.Darknotification} height={"50px"} width={"50px"}/>
</button>
</div>


<div className='logout'>

<button onClick={()=> dispatch(logout())}>
    <ImageDisplayComponent   src={photos.DarkLogout} height={"50px"} width={"50px"} />
</button>
</div>
</div>

</div>

);}

export default Header;