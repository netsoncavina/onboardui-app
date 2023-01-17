import React, { useState } from "react";
import Onboard from "./components/Onboard";

export const App = () => {
  const [showOnBoard, setShowOnBoard] = useState(true);
  return <>{showOnBoard && <Onboard />}</>;
};

export default App;
