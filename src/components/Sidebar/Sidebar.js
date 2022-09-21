import React from 'react';
import { Link } from 'react-router-dom';
import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <section className='sidebar'>
      <Link to="/HomePage" style={{color: 'white', textDecoration: 'none'}}>
        <header className='sidebar__header'>
            <h4>Movie Search🍿</h4>
        </header>
      </Link>
        <SidebarRow />
    </section>
  );
};

export default Sidebar;