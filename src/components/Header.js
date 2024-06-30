import React from 'react'
// import { CgProfile } from "react-icons/cg";
// import { FaBeer } from 'react-icons/fa';
import { behance_logo } from '../Data';


const Header = () => {
  return (
    <header>
      <div className='container-fluid'>
        <div className='top-header py-4 px-5'>
          <div className='brand-logo'>
            <img src = {behance_logo} alt = {behance_logo} className='w-auto h-4' />
          </div>
          <div className='page-links'>
            <ul className='flex itmes-center'>
              <li><a href = "http://" target = "_" rel = "_">Explore</a></li>
              <li><a href = "http://" target = "_" rel = "_">Assets</a></li>
              <li><a href = "http://" target = "_" rel = "_">Jobs</a></li>
              <li><a href = "http://" target = "_" rel = "_">Behance</a></li>
              <li><a href = "http://" target = "_" rel = "_">Jobs</a></li>
            </ul>
          </div>
        
        </div>

      </div>
    </header>
  )
}

export default Header