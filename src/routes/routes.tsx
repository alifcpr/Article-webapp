import { createBrowserRouter } from "react-router-dom";

/* Components */
import App from "../App";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>wrong</h1>,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
