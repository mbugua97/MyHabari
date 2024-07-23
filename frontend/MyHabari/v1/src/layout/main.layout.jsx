import React from 'react';
import AboutPage from '../pages/User/about.page';
import ManageUsersPage from '../pages/Admin/user.manage';
import NewsPage from '../pages/News/news.page';
import NotificationPage from '../pages/Notification/notification.page';
import AppsettingsPage from '../pages/Admin/user.settings';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const MainLayout = () => {

  const currentPage = useSelector((state) => state.page.currentPage);

  const renderPage = () => {
    switch (currentPage) {
        case 'users':
            return <ManageUsersPage/>;
        case 'about':
            return <AboutPage />;
        case 'settings':
          return <AppsettingsPage/>;
        case 'news':
          return <NewsPage />;
        case 'notifications':
            return <NotificationPage />;
        default:
            return < AboutPage/>;
    }
};
    return( 
<>
{renderPage()}
</>
  )
}
export default MainLayout