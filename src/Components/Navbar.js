import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
    list-style-type: none
`;

const Navbar = () =>{
  return (
  <div className='flex justify-center gap-3'>
    <List>
      <Link to="/">Dogs</Link>
    </List>
    <List>
      <Link to="/cats">Cats</Link>
    </List>
    <List>
      <Link to="/sheeps">Sheeps</Link>
    </List>
    <List>
      <Link to="/goats">Goats</Link>
    </List>
  </div>
  );
}
export default Navbar;