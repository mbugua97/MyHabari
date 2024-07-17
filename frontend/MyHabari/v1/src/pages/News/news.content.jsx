import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import NewsbyCategory from './newsbycategory';
import NewsPublish from './news.publish';
import News from './all.news';

const Root_url=import.meta.env.VITE_API_URL;

const NewsContent = () => {

const newsContentType = useSelector((state) => state.news.currentPage);

  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);


  const renderPage = () => {

    switch (newsContentType) {
        case 'all':
            return <News/>;

        case 'publish':
            return <NewsPublish />;

        default:
            return < NewsbyCategory/>;
    }
};

  return (

    <>
    {renderPage()}
    </>
  )
};

export default NewsContent;
