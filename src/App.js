// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header"
// import PrivateProfile from "./components/PrivateProfile";
// import CreateListing from "./pages/CreateListing";
// import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
// import Search from "./pages/Search";
import UserListing from "./pages/UserListing";
import UploadProperty from "./pages/UploadProperty";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload-property" element={<UploadProperty/>} />
        <Route path="/listing" element={<Listing />} />
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route  element= {<PrivateProfile />} > */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/create-listing" element={<CreateListing />} /> */}
          <Route path="/show-listing" element={<UserListing />} />
          {/* <Route path="/update-listing/:listingId" element={<UpdateListing />} /> */}
       
      </Routes>
    </BrowserRouter>
  )
}