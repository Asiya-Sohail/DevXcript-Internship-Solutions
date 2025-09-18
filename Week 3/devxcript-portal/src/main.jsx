import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import AuthLayout from "./AuthLayout";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Results from "./components/Results";
import Attendance from "./components/Attendance";
import Profile from "./components/Profile";
import Login from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth routes */}
      <Route path='/' element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      {/* App routes */}
      <Route path='/' element={<Layout />}>
        <Route path="dashboard" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="results" element={<Results />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
