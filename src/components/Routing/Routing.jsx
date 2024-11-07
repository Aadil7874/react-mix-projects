import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
// import About from "./components/About/About.jsx";
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
