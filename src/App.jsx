import React from "react";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import Matchmaker from "./components/Matchmaker";


function App() {
  return (
    <div className="App">
      <Homepage />
      <div id="login">
        <LoginForm />
        <Matchmaker />
      </div>
      <Footer />
    </div>
  );
}

export default App;