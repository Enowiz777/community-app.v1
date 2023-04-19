import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
    list-style-type: none
`;

const Navbar = () =>{
  return (
  <div className='flex justify-center gap-3 p-2 my-2'>
    <List>
      <Link to="/">Home</Link>
    </List>
    <List>
      <Link to="/community">Community</Link>
    </List>
    <List>
      <Link to="/photos">Photos</Link>
    </List>
    <List>
      <Link to="/videos">Videos</Link>
    </List>
  </div>
  );
}
export default Navbar;