var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function FindFriends(props) {
  return (
    <ul className="friends-list">
    {props.names.map(function(name, index) {
      return (
        <li key={name.name} className='friend-profile'>
          <div>{name.name}</div>
        </li>
      )
    })}
    </ul>
  )
}

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FindFriends />
    )
  }
}

module.exports = Friends;
