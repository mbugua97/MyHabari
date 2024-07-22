import React from 'react';
import { useDispatch } from 'react-redux';
import Write from './publish.content/write';
import LiveContent from './publish.content/public';
import { toggleRefresh } from '../../app/refresh';
import './index.css';

const NewsPublish = () => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(toggleRefresh());
  };

  return (
    <div className='progrestrack'>
      <div className='working-on'>
        <>new</>
        <Write onRefresh={handleRefresh} />
      </div>
      <>
        <LiveContent />
      </>
    </div>
  );
}

export default NewsPublish;
