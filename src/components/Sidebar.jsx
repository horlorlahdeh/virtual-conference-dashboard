import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight, FaEnvelope, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSubmenuOpen, closeSubmenu, closeSubmenuItems, openSubmenuItems } =
    useGlobalContext();
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(false);
  const handleDashboard = () => {
    setToggleDashboard((prevState) => !prevState);
    if (toggleEvent) {
      setToggleEvent(false);
    }
  };
  const handleEvent = () => {
    setToggleEvent((prevState) => !prevState);
    if (toggleDashboard) {
      setToggleDashboard(false);
    }
  };
  const displaySubmenu = (e) => {
    const text = e.currentTarget.getAttribute('data-id');
    const { top, right } = e.currentTarget.getBoundingClientRect();
    openSubmenuItems(text, { top, right });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('submenuitems-btn')) {
      closeSubmenuItems();
    }
  };
  const dashboardLinksContainer = useRef(null);
  const dashboardLinks = useRef(null);
  const eventLinksContainer = useRef(null);
  const eventLinks = useRef(null);
  useEffect(() => {
    const dashboardLinksHeight =
      dashboardLinks.current.getBoundingClientRect().height;
    const dashboardLinksContainerHeight = dashboardLinksContainer.current;
    const eventLinksHeight = eventLinks.current.getBoundingClientRect().height;
    const eventLinksContainerHeight = eventLinksContainer.current;
    if (toggleDashboard) {
      dashboardLinksContainerHeight.style.height = `${dashboardLinksHeight}px`;
    } else {
      dashboardLinksContainerHeight.style.height = `0px`;
    }
    if (toggleEvent) {
      eventLinksContainerHeight.style.height = `${eventLinksHeight}px`;
    } else {
      eventLinksContainerHeight.style.height = `0px`;
    }
  }, [toggleDashboard, toggleEvent]);
  return (
    <div
      className={`${
        isSubmenuOpen
          ? ' absolute left-0 top-0 bottom-0 flex flex-col   bg-dark transit-submenu w-72 z-10'
          : 'absolute flex flex-col  left-0 top-0 bottom-0 bg-dark  transit-submenu w-16'
      }`}
    >
      <div
        className={`${
          isSubmenuOpen
            ? 'hidden'
            : ' flex flex-col bg-dark text-submenu-purple'
        }`}
      >
        <div
          data-id='home'
          onMouseOver={displaySubmenu}
          className='submenuitems-btn flex items-center justify-center cursor-pointer '
        >
          <FaHome className=' text-lg h-12 submenuitems-btn' />
        </div>
        <div
          data-id='event'
          onMouseOver={displaySubmenu}
          className='submenuitems-btn flex items-center justify-center cursor-pointer  '
        >
          <FaEnvelope className=' text-lg h-9 submenuitems-btn' />
        </div>
      </div>
      <div
        onMouseOver={handleSubmenu}
        className={`${isSubmenuOpen ? 'hidden ' : 'block h-full  '}`}
      ></div>
      <div
        className={`${isSubmenuOpen ? 'block bg-dark ' : 'hidden '}`}
        style={{
          // position: '-webkit-sticky',
          position: 'sticky',
          top: '100px',
        }}
      >
        <h1 className='uppercase px-6 pt-4 text-xs text-submenu-purple tracking-widest'>
          navigation
        </h1>
        <div className=''>
          <div
            onClick={handleDashboard}
            className='cursor-pointer flex items-center justify-between pl-6 pr-4 py-4'
          >
            <div className='flex items-center gap-x-2 text-submenu-purple'>
              <FaHome />
              <h1 className='capitalize text-submenu-light'>dashboard</h1>
            </div>
            <FaChevronRight
              className={`${
                toggleDashboard
                  ? 'transform rotate-90 transit'
                  : 'transform rotate-0 transit '
              } text-submenu-purple`}
            />
          </div>
          <div
            ref={dashboardLinksContainer}
            className={`${
              toggleDashboard
                ? ' text-submenu-purple transit overflow-hidden '
                : ' transit overflow-hidden '
            } bg-submenu-light`}
          >
            <div ref={dashboardLinks} className=''>
              <NavLink to='/' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className='hover:text-white flex-1'>event</span>
                </li>
              </NavLink>
              <NavLink to='analytics' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none hover:text-white cursor-pointer'
                >
                  <span className=''>•</span>
                  <span className=''>analytics</span>
                </li>
              </NavLink>
            </div>
          </div>
        </div>

        <div className=''>
          <div
            onClick={handleEvent}
            className='cursor-pointer flex items-center justify-between pl-6 pr-4 py-4'
          >
            <div className='flex items-center gap-x-2 text-submenu-purple'>
              <FaEnvelope />
              <h1 className='capitalize text-submenu-light'>event</h1>
            </div>
            <FaChevronRight
              className={`${
                toggleEvent
                  ? 'transform rotate-90 transit'
                  : 'transform rotate-0 transit '
              } text-submenu-purple`}
            />
          </div>
          <div
            ref={eventLinksContainer}
            className={`${
              toggleEvent
                ? ' text-submenu-purple transit overflow-hidden  '
                : ' transit overflow-hidden h-0'
            } bg-submenu-light`}
          >
            <div ref={eventLinks} className=''>
              <NavLink
                to='/register'
                activeStyle={{ color: 'white' }}
                exact
              >
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>register</span>
                </li>
              </NavLink>
              <NavLink
                to='/login'
                activeStyle={{ color: 'white' }}
                exact
              >
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>login</span>
                </li>
              </NavLink>
              <NavLink
                to='/create-event'
                activeStyle={{ color: 'white' }}
                exact
              >
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>create event</span>
                </li>
              </NavLink>
              <NavLink
                to='/manage-rsvps'
                activeStyle={{ color: 'white' }}
                exact
              >
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>manage RSVPS</span>
                </li>
              </NavLink>
              <NavLink to='/pages' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>pages</span>
                </li>
              </NavLink>
              <NavLink to='/speakers' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>speakers</span>
                </li>
              </NavLink>
              <NavLink to='/sponsors' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>sponsors</span>
                </li>
              </NavLink>
              <NavLink to='/teams' activeStyle={{ color: 'white' }} exact>
                <li
                  onClick={() => closeSubmenu()}
                  className=' py-4 list-none flex gap-x-3 px-8 capitalize transition-none cursor-pointer hover:text-white '
                >
                  <span className=''>•</span>
                  <span className=' flex-1'>teams</span>
                </li>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
