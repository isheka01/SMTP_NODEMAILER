import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import EmailSend from "./components/smtp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmailSend />}></Route>
      </Routes>
    </>
  );
}
export default App;
