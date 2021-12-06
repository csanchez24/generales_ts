import React from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';
import { IGlobalState } from '../../store/reducers';
import { useSelector } from 'react-redux';

interface IProps {
  isOpen: boolean;
  handleOpen: any;
  handleLogout: any;
}

const UserDropDown: React.FC<IProps> = (props) => {
  const auth = useSelector((state: IGlobalState) => state.auth.data.user);

  return (
    <div className="relative ml-3">
      <div>
        <button
          className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
          id="user-menu"
          onClick={() => props.handleOpen(!props.isOpen)}
          aria-haspopup="true"
        >
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=xXzZa1n8ty&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="hidden ml-3 text-sm font-medium text-gray-700 lg:block">
            {auth?.name}
          </span>
          <ChevronDownIcon className="flex-shrink-0 hidden w-4 h-4 ml-1 text-gray-400 lg:block" />
        </button>
      </div>
      <Transition
        show={props.isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute right-0 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <NavLink
            to="/gener02"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Your Profile
          </NavLink>
          <div
            onClick={() => props.handleLogout()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default UserDropDown;
