// React & React-Router-DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// SCSS
import './assets/scss/index.scss';

// Pages
import App from './App.tsx';

// Children
import HomePage from './components/pages/HomePage.tsx';
// import NotFound from './react/pages/NotFound.tsx';
import About from './components/pages/About.tsx';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <About />,
            },
            // {
            //     path: '*',
            //     element: <NotFound />,
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);