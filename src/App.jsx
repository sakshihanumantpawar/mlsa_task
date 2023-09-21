/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "sakshi Hanumant Pawar",
  title: "Web Devloper",
  email: "Sakshi.Pawar@studentambassadors.com",
  gitHub: "https://github.com/sakshihanumantpawar",
  instagram: "https://instagram.com/its_pawar_sakshi?igshid=OGQ5ZDc2ODk2ZA==",
  linkedIn: "https://www.linkedin.com/in/sakshi-pawar-6113a4237",
  medium: "",
  twitter: "SakshiP35557267",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
