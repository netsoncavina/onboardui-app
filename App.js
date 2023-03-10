import React, { useState } from "react";
import Onboard from "./components/Onboard";
import { Home } from "./components/Home";

export const App = () => {
  const [showOnBoard, setShowOnBoard] = useState(true);
  const handleOnBoard = () => {
    setShowOnBoard(false);
  };
  return <>{showOnBoard ? <Onboard /> : <Home />}</>;
};

export default App;
