import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-primary-light font-poppins text-[16px] py-4">
      <div className="container max-w-[1280px] mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
