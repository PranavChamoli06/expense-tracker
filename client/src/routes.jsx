import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Overview from "./pages/Overview";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,

    children: [
      {
        index: true,
        element: <Overview />,
      },

      {
        path: "expenses",
        element: <Expenses />,
      },

      {
        path: "analytics",
        element: <Analytics />,
      },

      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;