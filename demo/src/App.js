import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ErrorNotFound from "./components/error/ErrorNotFound";
import TourDetails from "./components/tourDetails/TourDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/city/:id" Component={TourDetails} />
        <Route path="*" Component={ErrorNotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
