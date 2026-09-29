import { createBrowserRouter } from 'react-router-dom'

import App from './App'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'a-propos',
        element: <About />,
      },

      {
        path: 'logement/:id',
        element: <Housing />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router