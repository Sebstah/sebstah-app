import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "@/pages/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Homepage />} />
    </React.Fragment>
  )
);

export default router;
