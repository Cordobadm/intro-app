import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Layout from "./Layout";
import BadgeEdit from "../pages/BadgeEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/badges" element={<Badges />} />
          <Route exact path="/badges/:badgeId/edit" element={<BadgeEdit />} />
          <Route exact path="/badges/new" element={<BadgeNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
