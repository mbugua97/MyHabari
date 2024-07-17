import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Category from '../../components/category.component';
import './index.css'

const Root_url=import.meta.env.VITE_API_URL;

const NewsCategory = () => {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = Cookies.get("MH_TKN");
        const response = await axios.get(`${Root_url}/category`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <div>
        <div className='category'>
        <Category name={"all"} page={'all'}/>
        
        {categories.map((category) => (
            <div key={category.id}>
            <Category name={category.categoryName} page={category.categoryName}/>
        </div>
        ))}
         <Category name={"publish"} page={'publish'}/>
           </div>  
    </div>
  );
};

export default NewsCategory;
