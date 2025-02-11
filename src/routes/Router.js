import React from "react";
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ErrPage from "../pages/ErrPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile/:name" element={<ProfilePage/>}/>
        <Route path="*" element={<ErrPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
