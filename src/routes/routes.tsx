import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Test from "../components/Test";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>wrong</h1>,
    children: [{ path: "/test", element: <Test /> }],
  },
]);
