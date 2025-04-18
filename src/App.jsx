import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import Matchmaker from "./components/Matchmaker";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/match" element={<Matchmaker />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
