import './App.css';
import Daylights from './pages/daylights/daylights'
import Potter from './pages/potter/potter'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from './routes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/daylights",
    element: <Daylights/>,
  },
  {
    path: "/potter",
    element: <Potter/>,
  },
]);

function App() {
  return (
    <div className="App">

      <header className="App-header"> 
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
