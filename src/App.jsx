/* eslint-disable import/extensions */
import React from 'react';

import './styles/index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Navbar from './components/NavBar';
import Details from './routes/Details';
import Home from './routes/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>,
    ),
    { basename: '/tvmaze-show' },
  );

  return (
    <div className='main'>
    <main className="main__container odd">
      <RouterProvider router={router} />
    </main>
    </div>
  );
}

export default App;
