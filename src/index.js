import React from 'react';
import ReactDOM from 'react-dom/client';
import WestGardenApp from './WestGardenApp';

import { Provider } from 'react-redux';
import { store } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <WestGardenApp/> 
    </Provider>
  </React.StrictMode>
);

