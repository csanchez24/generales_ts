import React from 'react';
import { Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';

interface IProps {
  isOpen: boolean;
  handleOpen: any;
}

const Notifications: React.FC<IProps> = (props) => {
  return (
    <div className="relative">
      <div>
        <button
          className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          onClick={() => props.handleOpen(!props.isOpen)}
        >
          <BellIcon className="h-5 w-" />
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
          -- Notifications --
        </div>
      </Transition>
    </div>
  );
};

export default Notifications;
