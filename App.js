import React, { useState } from 'react';
import MainApp from './mainApp';
import SettingsPage from './settings';

const App = () => {
  const [from, setFrom] = useState('Aarhus Centrum');
  const [fromCode, setFromCode] = useState('4301');
  const [to, setTo] = useState('Aarhus Nord');
  const [toCode, setToCode] = useState('4303');
  const [showMain, setShowMain] = useState(false);
  const [color, setColor] = useState('rgb(161,216,239)');
  const topSource = require('./assets/top.jpg');
  const boxSource = require('./assets/box.jpg');
  const mapSource = require('./assets/map.jpg');
  const arrowsSource = require('./assets/arrows.png');
  const btmSource = require('./assets/btm.jpg');

  if (showMain) {
    return (
      <MainApp
        from={from}
        fromCode={fromCode}
        to={to}
        toCode={toCode}
        setShowMain={setShowMain}
        color={color}
        topSource={topSource}
        boxSource={boxSource}
        mapSource={mapSource}
        arrowsSource={arrowsSource}
        btmSource={btmSource}
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
        color={color}
        setColor={setColor}
      />
    );
  }
};



export default App;

