import React from "react";

import './App.css';


import Nav from "./components/Nav/nav";
import ViewportWidthProvider from "./utils/getViewport";

function App() {
  return (
    <ViewportWidthProvider>
      <Nav />
    </ViewportWidthProvider>

  );
}

export default App;
