import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/outline';

import Notifications from '../Layout/Notifications';
import UserDropDown from '../Layout/UserDropDown';
import { Outlet } from 'react-router-dom';

interface IProps {
  isOpenNotification: boolean;
  isOpenDropdown: boolean;
  handleOpenNotification: any;
  handleOpenDropdown: any;
  handleOpenDrawer: any;
  handleLogout: any;
}

const MainBody: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <div className="flex-1 overflow-auto focus:outline-none">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
          <button
            onClick={() => props.handleOpenDrawer(true)}
            className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          <div className="flex justify-between flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div
                    className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <SearchIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="search_field"
                    name="search_field"
                    className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search transactions"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center ml-4 md:ml-6">
              <Notifications
                isOpen={props.isOpenNotification}
                handleOpen={props.handleOpenNotification}
              />

              <UserDropDown
                isOpen={props.isOpenDropdown}
                handleOpen={props.handleOpenDropdown}
                handleLogout={props.handleLogout}
              />
            </div>
          </div>
        </div>
        <main className="relative z-0 flex-1 pb-8 overflow-y-auto">
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainBody;
