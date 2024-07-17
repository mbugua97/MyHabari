import React from 'react';
import './category.component.css'
import { useSelector, useDispatch } from 'react-redux';
import {setPage} from '../app/newsSlice';

function Category({name,page}) {
    const dispatch = useDispatch();

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
      };

  return (
    <div className='category'>
    <button onClick={() => handlePageChange(`${page}`)} className='categorybutton'>

      {name}
    
    
    </button>
    </div>
  );
}

export default Category;
