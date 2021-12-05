import React from 'react';

import { Transition } from '@headlessui/react';
import Menu from './Menu';
import { XIcon } from '@heroicons/react/solid';

interface IProps {
  isOpen: boolean;
  handleOpen: any;
}

const SideDrawer: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <Transition
        show={props.isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100 "
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
      >
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75" aria-hidden="true"></div>
            </div>
            <Transition
              show={props.isOpen}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
              className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-cyan-700"
            >
              <div className="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  onClick={() => props.handleOpen(false)}
                  className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <XIcon className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                  alt="Easywire logo"
                />
              </div>
              <Menu />
            </Transition>
          </div>
        </div>
      </Transition>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-cyan-700">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
