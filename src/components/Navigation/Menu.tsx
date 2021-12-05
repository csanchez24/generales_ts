import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClockIcon, HomeIcon } from '@heroicons/react/outline';

const Menu = () => {
  return (
    <React.Fragment>
      <nav
        className="flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-cyan-800"
        aria-label="Sidebar"
      >
        <div className="px-2 space-y-1">
          <NavLink
            to="/"
            className="flex items-center px-2 py-2 text-base font-medium text-cyan-100 hover:text-white hover:bg-cyan-600 group rounded-md"
          >
            <HomeIcon className="w-5 h-5 mr-4 text-cyan-200" />
            Home
          </NavLink>
          <NavLink
            to="/gener02"
            className="flex items-center px-2 py-2 text-base font-medium text-cyan-100 hover:text-white hover:bg-cyan-600 group rounded-md"
          >
            <ClockIcon className="w-5 h-5 mr-4 text-cyan-200" />
            History
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

Menu.propTypes = {};

export default Menu;
