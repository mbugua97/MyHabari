import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import DisplayNews from '../../../components/news.component';
import './index.css';

const LiveContent = () => {
  const root_url = import.meta.env.VITE_API_URL;
  const Root_url = root_url;
  const newsContentType = useSelector((state) => state.news.currentPage);
  const refresh = useSelector((state) => state.refresh.refresh);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const owner_id = useSelector((state) => state.user.user.id);

  const fetchNews = useCallback(async () => {
    try {
      const token = Cookies.get("MH_TKN");
      const response = await axios.get(`${Root_url}/content/self/${owner_id}`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page }
      });
      setNews(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, Root_url, owner_id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNews();
  }, [page, newsContentType, refresh, fetchNews]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleDelete = async (Did) => {
    try {
      const token = Cookies.get("MH_TKN");
      const response = await axios.delete(`${Root_url}/content/${Did}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        fetchNews();
      } else {
        console.error('Failed to delete the news item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='news'>
        {news.map((item) => (
          <div key={item.id}>
            <DisplayNews
              Did={item.id}
              onDelete={handleDelete}
              deletedit={true}
              live={item.ready}
              profilesrc={`${root_url}${item.Users.profilePic}`}
              owner={item.Users.Name}
              title={item.content_title}
              content={item.content}
            />
          </div>
        ))}
      </div>
      <div className='buttonpages'>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LiveContent;
