import { createBrowserRouter, Navigate } from "react-router-dom";

// import routing components
import SignIn from "../Pages/Login/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import AddStory from "../Pages/AddStory/AddStory";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/add-story",
        element: <AddStory />,
      }
    ],
  },
]);

export default MainRoutes;
