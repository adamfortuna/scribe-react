import React from 'react';
import Filter from './Filter';
import Shelves from './Shelves';

class Sidebar extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <section className="sidebar">
        <Filter />
        <Shelves />
      </section>
    )
  }
}

export default Sidebar;
