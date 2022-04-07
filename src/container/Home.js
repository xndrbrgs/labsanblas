import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useLocoScroll from "../hooks/useLocoScroll";

// CSS
import "../styles/index.scss";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Footer from "../components/Footer/footer";

// Pages
// import Main from "../pages/Main";
// import AboutMe from "../pages/AboutMe";

// Routes
// const routes = [
//   { path: "/", name: "Main", Component: Main },
//   { path: "/about-me", name: "AboutMe", Component: AboutMe },
// ];

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(0);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          {/* <h1>Alex Borges</h1> */}
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Header />
          <Hero />

          {/* <div className="App">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </div> */}

          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};
export default Home;
