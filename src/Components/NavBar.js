import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
  return(
    <div className="navbar">
      <NavLink style={{ marginRight: '10px'}} to='/'>Home</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/eachFam'>EachFam</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/privateEvent'>PrivateEvent</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/singleChat'>SingleChat</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/allChats'>AllChats</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/userProfile'>UserProfile</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/connections'>Connections</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/search'>Search</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/publicEvent'>PublicEvent</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/help'>Help</NavLink>
    </div>
  )
}

export default NavBar