import React, { FunctionComponent, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import Router from "./routes/router";
import Provider from "./Provider";

const App = () => {
  const [preLoader, setPreLoader] = useState(false);
  console.log("2");
  return (
    <Provider>
      <>
        <LoadingOverlay
          active={preLoader}
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
        />
        <Router />
      </>
    </Provider>
  );
};

export default App;
