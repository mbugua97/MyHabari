import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ManageUsersPage = () => {

  const user = useSelector((state) => state.user.user);

  return( 
<div className='sidebarWrapper'>

<div>
    {user.Name}
</div>
<p>admin page</p>
</div>
)}

export default ManageUsersPage