import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import Router from "./routes/router";
import Provider from "./Provider";
import useRootStore from "./store/useRootStore";

const App = () => {
  const { questionLoading, question } = useRootStore().quizStore;

  // improvements for production
  // adding an error boundry - using a software such as sentry or bugsnag to help detect any prod build errors
  // usiing a BrowserRouter or a HashRouter
  return (
    <Provider>
      <>
        {/* <LoadingOverlay
          active={questionLoading}
          spinner
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgba(0,0,0,0.9)",
              zIndex: "100000",
              minHeight: "100vh",
            }),
            content: (base) => ({
              ...base,
              top: "10vh",
              height: "100vh",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }),
          }}
          text="Loading TreeMatch...."
        /> */}
        <Router />
      </>
    </Provider>
  );
};

export default App;
