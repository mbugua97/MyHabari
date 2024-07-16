import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const NotificationPage = () => {
  const user = useSelector((state) => state.user.user.data);

  return( 
<div>
    this is the notificaton page
</div>
)}

export default NotificationPage