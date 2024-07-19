import React from 'react';
import Live from './publish.content/public';
import Ready from './publish.content/ready';
import Review from './publish.content/review';
import Started from './publish.content/started';



const NewsPublish = () => {
  return( 
<div className='progrestrack'>
    <div className='progress-start'>
      <Started/>
    </div>
    <div className='working-on'>
      <Review/>
    </div>
    <div className='ready'>
      <Ready/>
    </div>

    <div className='ive'>
      <Live/>
    </div>
</div>
)}

export default NewsPublish