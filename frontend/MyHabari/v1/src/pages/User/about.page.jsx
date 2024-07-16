import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const AboutPage = () => {

  const user = useSelector((state) => state.user.user);

  return( 
<div>

<div>
    {user.Name}
</div>
<div>
    {user.Email}
</div>
</div>
)}

export default AboutPage