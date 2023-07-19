import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../assets/css/styles.css';
import HeadDOM from './dom/headDOM';

import Routers from './router/router';
// import WishlistTab from './dom/wishlistTab';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="drawer">
        <HeadDOM />
        <Routers />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);

/* 
No routes matched location
*/
