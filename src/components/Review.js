import React from 'react';

/*
Example Review
{"id":"1347260603",
  "book":
    {"id":186074,
      "isbn":"075640407X",
      "isbn13":"9780756404079",
      "text_reviews_count":21290,
      "title":"The Name of the Wind (The Kingkiller Chronicle, #1)",
      "title_without_series":"The Name of the Wind",
      "image_url":"http://images.gr-assets.com/books/1472068073m/186074.jpg",
      "small_image_url":"http://images.gr-assets.com/books/1472068073s/186074.jpg",
      "large_image_url":null,
      "link":"http://www.goodreads.com/book/show/186074.The_Name_of_the_Wind",
      "num_pages":"662",
      "format":"Hardcover",
      "edition_information":null,
      "publisher":"Penguin Group DAW Hardcover",
      "publication_day":"27",
      "publication_year":"2007",
      "publication_month":"3",
      "average_rating":"4.55",
      "ratings_count":"413212",
      "description":"Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. \u003cbr /\u003e\u003cbr /\u003eThe intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature. \u003cbr /\u003e\u003cbr /\u003eA high-action story written with a poet's hand, \u003ci\u003eThe Name of the Wind\u003c/i\u003e is a masterpiece that will transport readers into the body and mind of a wizard.",
      "authors":{
        "author":{
          "id":"108424",
          "name":"Patrick Rothfuss",
          "role":null,
          "image_url":"\nhttp://images.gr-assets.com/authors/1351307341p5/108424.jpg\n",
          "small_image_url":"\nhttp://images.gr-assets.com/authors/1351307341p2/108424.jpg\n",
          "link":"http://www.goodreads.com/author/show/108424.Patrick_Rothfuss",
          "average_rating":"4.49",
          "ratings_count":"769592",
          "text_reviews_count":"51547"
        }
      },
      "published":"2007"
    },
    "rating":"4",
    "votes":"0",
    "spoiler_flag":"false",
    "spoilers_state":"none",
    "shelves":{
      "shelf":[
        {"name":"read","exclusive":"true"},
        {"name":"npr-top-100-science-fiction-fantasy","exclusive":"false","review_shelf_id":"1044821071","sortable":"false"}
      ]
    },
    "recommended_for":null,
    "recommended_by":null,
    "started_at":"Sat Feb 18 00:00:00 -0800 2017",
    "read_at":"Wed Mar 01 00:00:00 -0800 2017",
    "date_added":"Mon Jul 27 17:47:17 -0700 2015",
    "date_updated":"Thu Mar 02 05:55:18 -0800 2017",
    "read_count":"1",
    "body":"\n  ",
    "comments_count":"0",
    "url":"http://www.goodreads.com/review/show/1347260603",
    "link":"http://www.goodreads.com/review/show/1347260603",
    "owned":"0"
  }
*/
class Review extends React.Component {
  static propTypes = {
    review: React.PropTypes.object.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  goToReview = (e) => {
    event.preventDefault();
    // Grab text from box
     const reviewId = this.props.review.id;
     console.log("Going to ", reviewId);

    // Transition to /store/:storeId
    this.context.router.transitionTo(`/reviews/${reviewId}`);
  }

  render() {
    let review = this.props.review,
        book = review.book;

    // <img src={book.image_url} aria-hidden />
    // <img src={"http://images.amazon.com/images/P/"+book.isbn+".01.ZTZZZZZZ.jpg"} aria-hidden />
    return (
      <li className={"card card-block review mb-3 rating-" + review.rating}>
        <div className="col-md-3 review--image">
          <a href={book.link} target="_blank">
            IMAGE
          </a>
          <p className="review--rating">
            <span className="review--rating-large">{review.rating}</span>
            /
            <span className="review--rate-outof">5</span>
          </p>
        </div>
        <div className="col-md-9">
          <h3>{book.title}</h3>
          <p className="lead">By {book.authors.author.name}</p>
          <p>{review.body}</p>
          <p className="review--meta">
            <a href={`/reviews/${review.id}`} onClick={this.goToReview} >
              Started on {review.started_at}. {review.read_at ? `Finished on ${review.read_at}` : 'Currently Reading'}.
            </a>
          </p>
        </div>
      </li>
    )
  }
}

export default Review;
