import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './css/style.css'

const Root = () => {
  return <Routes />;
}

render(<Root />, document.getElementById('main'));
