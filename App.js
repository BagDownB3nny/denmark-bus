import React, { useState } from 'react';
import MainApp from './mainApp';
import SettingsPage from './settings';

const App = () => {
  const [from, setFrom] = useState('Aarhus Centrum');
  const [fromCode, setFromCode] = useState('4301');
  const [to, setTo] = useState('Aarhus Nord');
  const [toCode, setToCode] = useState('4303');
  const [showMain, setShowMain] = useState(false);

  if (showMain) {
    return (
      <MainApp
        from={from}
        fromCode={fromCode}
        to={to}
        toCode={toCode}
        setShowMain={setShowMain}
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
        setShowMain={setShowMain}
      />
    );
  }
};



export default App;

