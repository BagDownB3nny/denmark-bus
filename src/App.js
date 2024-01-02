import React, { useState } from "react";
import MainApp from "./mainApp";
import SettingsPage from "./settings";

const App = () => {
  const [from, setFrom] = useState("Aarhus Centrum");
  const [fromCode, setFromCode] = useState("4301");
  const [to, setTo] = useState("Aarhus Nord");
  const [toCode, setToCode] = useState("4303");
  const [firstTopRatio, setFirstTopRatio] = useState("0.365");
  const [secondTopRatio, setSecondTopRatio] = useState("0.44");
  const [showMain, setShowMain] = useState(false);
  const [color, setColor] = useState("rgb(161,216,239)");


  if (showMain) {
    return (
      <MainApp
        from={from}
        fromCode={fromCode}
        to={to}
        toCode={toCode}
        firstTopRatio={firstTopRatio}
        secondTopRatio={secondTopRatio}
        setShowMain={setShowMain}
        color={color}
      />
    );
  } else {
    return (
      <SettingsPage
        from={from}
        setFrom={setFrom}
        fromCode={fromCode}
        setFromCode={setFromCode}
        to={to}
        setTo={setTo}
        toCode={toCode}
        setToCode={setToCode}
        firstTopRatio={firstTopRatio}
        setFirstTopRatio={setFirstTopRatio}
        secondTopRatio={secondTopRatio}
        setSecondTopRatio={setSecondTopRatio}
        setShowMain={setShowMain}
        color={color}
        setColor={setColor}
      />
    );
  }
};

export default App;
