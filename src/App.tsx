import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLayout } from './components';
import { MainPage, NotFoundPage, PersonPage } from './pages';
import { setupStore } from './store/store';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <PageLayout>
        <BrowserRouter>
          <Routes>
            <Route element={<PersonPage />} path='/person' />
            <Route element={<MainPage />} path='/' />
            <Route element={<NotFoundPage />} path='*' />
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </Provider>
  );
}
