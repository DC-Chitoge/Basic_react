import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from "./components/error-page.jsx";
import { LoginPage } from "./pages/login-page.jsx";
import { RegisterPage } from "./pages/register-page.jsx";
import { UserPage } from "./pages/user-page.jsx";
import { ProductPage } from "./pages/product-page.jsx";
import "./styles/reset.css";
import { AddComponent } from "./components/addTodolist.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <AddComponent /> },
      { path: "/users", element: <UserPage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
