var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/profile'>Profile</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/friends'>Friends</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
