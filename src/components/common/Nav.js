import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <ul className='nav nav-tabs mb-3'>
        <li className="nav-item"><a href='/' className="nav-link active">Recent</a></li>
        <li className="nav-item"><a href='#' className="nav-link">Reviews</a></li>
        <li className="nav-item"><a href='#' className="nav-link">Favorites</a></li>
      </ul>
    )
  }
}

export default Nav;
