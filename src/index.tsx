import { ToggleButton } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";

import Root from "./routes/root";

import Air from "./routes/pages/air-conditioner";
import Electronic from "./routes/pages/electronic-board";
import Washing from "./routes/pages/washing-machine";
import Package from "./routes/pages/package";
import Refrigerator from "./routes/pages/refrigerator";

import {loader as buttomLoader} from "./routes/ButtomNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // element: <h1>سلام دنیا</h1>,
    loader: buttomLoader,
    children: [
      {
        path: "air-conditioner",
        element: <Air />,
      },
      {
        path: "electronic-board",
        element: <Electronic />,
      },
      {
        path: "washing",
        element: <Washing />,
      },
      {
        path: "package",
        element: <Package />,
      },
      {
        path: "refrigerator",
        element: <Refrigerator />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
