import React from 'react';

class Pagination extends React.Component {
  static propTypes = {
    setPage: React.PropTypes.func.isRequired,
    page: React.PropTypes.number.isRequired,
    perPage: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired
  };

  renderPages(page, count, perPage) {
    if (count > 0) {
      let pages = [];
      const pagesCount = Math.ceil(count/perPage);
      for(let i=0; i<pagesCount; i++) {
        let activeClass = ((i+1) === page) ? 'active' : '';
        pages.push(
          <li className={"page-item " + activeClass} key={i}><a className="page-link" onClick={this.props.setPage} href="#">{i+1}</a></li>
        )
      }
      return pages;
    }
    else return [];
  }

  render() {
    const pages = this.renderPages(this.props.page, this.props.count, this.props.perPage);

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          { pages }
        </ul>
      </nav>
    )
  }
}

export default Pagination;
