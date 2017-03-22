import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import ReviewsPage from './components/reviews/ReviewsPage';
import ReviewPage from './components/review/ReviewPage';
import NotFoundPage from './components/common/NotFoundPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <App>
        <Route exact={true} path="/" component={ReviewsPage} />
        <Route path="/reviews/:reviewId" component={ReviewPage} />
        <Route component={NotFoundPage} />
      </App>
    </BrowserRouter>
  )
};

export default Routes;
