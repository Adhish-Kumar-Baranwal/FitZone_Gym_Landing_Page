import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home.jsx";
import Pricing from "./page/Pricing.jsx";
import Trainers from "./page/Trainers.jsx";
import ContactForm from "./page/ContactForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <Pricing />
          </Layout>
        }
      />
      <Route
        path="/trainers"
        element={
          <Layout>
            <Trainers />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactForm />
          </Layout>
        }
      />
    </Routes>
    <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
