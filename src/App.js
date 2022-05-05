import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Page from './content/Page.jsx';
import React from 'react';

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Frontend Mentor | [Pricing component with toggle]</title>
        </Helmet>
      </HelmetProvider>
      
      <Page/>
      <div className="App">
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/JoonaPohjonen">HoodyJones</a>.
        </div>
      </div>
    </>
  );
}

export default App;
