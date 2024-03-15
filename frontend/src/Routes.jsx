import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },

  ]);

  return element;
};

export default ProjectRoutes;
