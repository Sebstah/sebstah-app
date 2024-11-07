import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "@/components/layout"; // Import your Layout component
import Homepage from "@/pages/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      {/* Wrap the Homepage route with the Layout component */}
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </React.Fragment>
  )
);

export default router;
