import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './js/App';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <App />
    </AppContainer>
  ),
  root,
);

load();
