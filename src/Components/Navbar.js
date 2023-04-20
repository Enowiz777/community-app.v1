import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
    list-style-type: none;
    padding: 10px;
    &:hover {
      background-color: lightblue;
    }
`;

const Navbar = () =>{
  return (
  <div className='flex justify-center gap-3 mb-2'>
    <List>
      <Link to="/">Home</Link>
    </List>
    <List>
      <Link to="/chat">Chat</Link>
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