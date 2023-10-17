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
import ModalStateProvider from "./context/ModalStateProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <ModalStateProvider>
          <RouterProvider router={routes}>
            <App />
          </RouterProvider>
        </ModalStateProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
