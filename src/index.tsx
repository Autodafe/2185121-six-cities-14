import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux/es/exports';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';

// store.dispatch(fetchOffers(offers)); заглушка для фечей

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
