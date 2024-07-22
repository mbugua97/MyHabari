import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ImageDisplayComponent from '../../components/image.component';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form.component';
import { tokenToCSSVar } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import photos from '../../assets/images/photos';
import DisplayUser from '../../components/user.component';
import axios from 'axios';
import { loginSuccess } from '../../app/userSlice';
import SearchComponent from '../../components/searchComponent';

import './index.css'

const ManageUsersPage = () => {
  const Root_url = import.meta.env.VITE_API_URL;

  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [filterLetter, setFilterLetter] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = Cookies.get("MH_TKN");
        const response = await axios.get(`${Root_url}/Users`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { page }
        });
        setUsers(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

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

  const handleFilterChange = (event) => {
    setFilterLetter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(filterLetter.toLowerCase())
  );

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='SearchUser'>
          <div>
          <FormInput className="SearchUser" type="text" required onChange={handleFilterChange} />
          </div>
          <div>
          <ImageDisplayComponent src={photos.search}/>
          </div>
      </div>
      <div className='news'>
        {filteredUsers.map((item) => (
          <div key={item.id}>
            


            <DisplayUser name={item.Name} profile={item.profilePic} />




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
};

export default ManageUsersPage;
