import React from 'react';

class Shelves extends React.Component {
  // static propTypes = {
  //   shelves: React.PropTypes.array.isRequired,
  //   filterReviews: React.PropTypes.func.isRequired
  // };

  constructor() {
    super();
    this.state = {
      shelves: [
        { name: 'on-deck', books_count: 12 },
        { name: 'read', books_count: 433 }
      ]
    };
  }

  niceName(slug) {
    return slug.split('-')
               .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
               .join(' ');
  }

  filter = (e, shelf) => {
    e.preventDefault();
    this.props.filterReviews({ shelf: shelf.name })
  }

  render() {
    return (
      <div>
        <h3 className="mb-3">Shelves</h3>
        <div className="list-group shelves">
          {
            this.state.shelves.map(shelf =>
              <a href={`?shelf=${shelf.name}`} onClick={(e) => this.filter(e, shelf)} className="list-group-item justify-content-between" key={shelf.name}>
                {this.niceName(shelf.name)}
                <span className="badge badge-default badge-pill">{shelf.books_count}</span>
              </a>
            )
          }
        </div>
      </div>
    )
  }
}

export default Shelves;
