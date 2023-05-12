import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
    color: black;
    font-weight: 450;
    list-style-type: none;
    padding: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #FFD700;
      color: white;
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
    <List>
      <Link to="/contact">Contact</Link>
    </List>
  </div>
  );
}
export default Navbar;