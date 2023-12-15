import React, { useState } from "react";

const SettingsPage = ({
  from,
  setFrom,
  fromCode,
  setFromCode,
  to,
  setTo,
  toCode,
  setToCode,
  setShowMain,
  color,
  setColor,
}) => {
  const colors = [
    { label: "Blue", value: "rgb(161,216,239)" },
    { label: "Yellow", value: "rgb(251,221,149)" },
    { label: "Cyan", value: "rgb(166,237,233)" },
    { label: "Orange", value: "rgb(241,177,139)" },
    { label: "Purple", value: "rgb(162,172,238)" },
  ];
  const [input1, setInput1] = useState(from);
  const [input2, setInput2] = useState(fromCode);
  const [input3, setInput3] = useState(to);
  const [input4, setInput4] = useState(toCode);

  const handleSave = () => {
    setFrom(input1);
    setFromCode(input2);
    setTo(input3);
    setToCode(input4);
    setShowMain(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
      }}
    >
      <label>From name</label>
      <input
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: 200,
          height: 40,
          marginBottom: 20,
        }}
      />
      <label>From code</label>
      <input
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: 200,
          height: 40,
          marginBottom: 20,
        }}
      />
      <label>To name</label>
      <input
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: 200,
          height: 40,
          marginBottom: 20,
        }}
      />
      <label>To Code</label>
      <input
        value={input4}
        onChange={(e) => setInput4(e.target.value)}
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: 200,
          height: 40,
          marginBottom: 20,
        }}
      />
      <label>Choose color</label>
      <div
        style={{ color: color, backgroundColor: "rgb(20,20,20)", fontSize: 30 }}
      >
        Current color
      </div>
      <select
        onChange={(e) => setColor(e.target.value)}
        value={color}
        style={{ fontSize: 50, backgroundColor: "rgb(20,20,20)" }}
      >
        {colors.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SettingsPage;