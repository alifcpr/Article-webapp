import { createBrowserRouter } from "react-router-dom";

/* Pages */
import App from "../App";
import SignUpPage from "../pages/Auth/SignUpPage";
import Landing from "../pages/Landing";
import LoginPage from "../pages/Auth/LoginPage";
import UserPage from "../pages/user/UserPage";
import BlogPage from "../pages/BlogPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>wrong</h1>,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/profile", element: <UserPage /> },
      { path: "/blog/:blogSlug", element: <BlogPage /> },
    ],
  },
]);
