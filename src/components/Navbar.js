import React, { useContext } from 'react';
import { UserContext } from './App';

const Navbar = () => {
  const store = useContext(UserContext);
  return (
    <nav>
      <span className='title'>Cool App</span>
      <span> Hello, {store.firstName} {store.lastName}!</span>
    </nav>
  );
};

export default Navbar;
