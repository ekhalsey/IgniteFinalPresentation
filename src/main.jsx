import React from 'react'
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx'
import TicTacToe from './TicTacToe.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Introduction from './Introduction.jsx';
import './styles.css'
import * as bootstrap from 'bootstrap'
import SummerProject from './SummerProject.jsx';
import Network from './Network.jsx';
import WebApp from './WebApp.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<Home />}
        path="/"
        errorElement={<ErrorPage />}
      >
        <Route
          element={<TicTacToe />}
          path="/tictactoe"
          errorElement={<ErrorPage />}
        />
        <Route
          element={<Introduction />}
          path="/intro"
          errorElement={<ErrorPage />}
        />
        <Route
          element={<SummerProject />}
          path="project"
          errorElement={<ErrorPage />}
        />
        <Route
          element={<Network />}
          path="network"
          errorElement={<ErrorPage />}
        />
        <Route
          element={<WebApp />}
          path="webapp"
          errorElement={<ErrorPage />}
        />
      </Route>

    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
