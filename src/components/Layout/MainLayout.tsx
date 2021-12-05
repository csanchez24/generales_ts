import React, { useState } from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import MainBody from '../Navigation/MainBody';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authentication/action';

const MainLayout: React.FC = (props) => {
  const dispatch = useDispatch();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <SideDrawer isOpen={isOpenDrawer} handleOpen={setIsOpenDrawer} />
      <MainBody
        handleLogout={handleLogout}
        isOpenNotification={isOpenNotification}
        isOpenDropdown={isOpenDropdown}
        handleOpenNotification={setIsOpenNotification}
        handleOpenDropdown={setIsOpenDropdown}
        handleOpenDrawer={setIsOpenDrawer}
      >
        {props.children}
      </MainBody>
    </div>
  );
};

export default MainLayout;
