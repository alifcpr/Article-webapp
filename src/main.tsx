import React from "react";
import ReactDOM from "react-dom/client";
/* pages */
import App from "./App.tsx";
/* styles */
import "./index.css";
/* react-router-dom */
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
/* query-client */
import { QueryClientProvider, QueryClient } from "react-query";
/*react-hot-toast */
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
