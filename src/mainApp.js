import React from "react";
import { useState } from "react";
import Timer from "./timer";
import CurrentTimer from "./currentTimer";

const MainApp = ({ from, fromCode, to, toCode, setShowMain, color }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const firstTop = height * 0.388;
  const secondTop = height * 0.463;
  const locationLeft = width * 0.18;
  const codeLeft = width * 0.75;
  const timerTop = height * 0.58;
  const timerLeft = width * 0.7;
  const gifTop = height * 0.76;
  const gifLeft = width * 0.085;
  const currentTimerTop = height * 0.15;
  const currentTimerLeft = width * 0.38;

  const styles = {
    arrows: {
      position: "absolute",
      width: width * 0.83,
      height: height * 0.11,
      top: height * 0.38,
      left: width * 0.08,
      zIndex: 2,
      borderTopLeftRadius: 13,
      borderTopRightRadius: 13,
    },
    map: {
      position: "absolute",
      width: width * 0.894,
      height: height * 0.17,
      top: height * 0.192,
      left: width * 0.054,
      zIndex: 2,
      borderTopLeftRadius: 13,
      borderTopRightRadius: 13,
    },
    background: {
      position: "absolute",
      width: width * 0.915,
      height: height * 0.329,
      top: height * 0.188,
      left: width * 0.043,
      zIndex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    button: {
      zIndex: 100,
    },
    container: {},
    boxwrapper: {
      // display: 'flex',
      // justifyContent: 'center',
    },
    image: {
      // top: 0,
      width: width,
      height: height / 1.87, // each image takes half the screen's height
    },
    imagebox: {
      top: -370,
      left: -4,
      width: width * 1.02,
      height: height * 0.5,
      position: "absolute",
      zIndex: 1,
    },
    image2: {
      top: 100,
      width: width,
      height: height / 2, // each image takes half the screen's height
    },
    gif: {
      position: "absolute",
      width: 0.355 * width,
      height: 0.13 * height,
      zIndex: 1,
    },
    text: {
      position: "absolute",
      color: "rgba(40,40,40,100)",
      fontWeight: "bold",
      fontSize: 21,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
      transform: [{ scaleY: 1.1 }],
      fontWeight: "700",
      zIndex: 4,
    },
    codetext: {
      position: "absolute",
      color: "black",
      fontWeight: "bold",
      fontSize: 21,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
      transform: [{ scaleY: 1.1 }],
      fontWeight: "700",
      zIndex: 4,
    },
    timer: {
      position: "absolute",
      color: "rgba(200,200,200,100)",
      // color: 'white',
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
    currenttimer: {
      position: "absolute",
      color: "rgba(20,20,20,100)",
      // color: 'white',
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <img
        className="ss"
        style={styles.image}
        src={require("./assets/top.jpg")}
      />
      <div style={{ ...styles.background, backgroundColor: color }}></div>
      <div style={styles.boxwrapper}>
        <img
          className="ss"
          style={styles.imagebox}
          src={require("./assets/box.jpg")}
        />
      </div>
      <img
        className="ss"
        style={styles.map}
        src={require("./assets/map.jpg")}
      />
      <img
        className="ss"
        style={styles.arrows}
        src={require("./assets/arrows.png")}
      />
      <CurrentTimer
        style={{
          ...styles.currenttimer,
          top: currentTimerTop,
          left: currentTimerLeft,
        }}
      />
      <p style={{ ...styles.text, top: firstTop, left: locationLeft }}>
        {from}
      </p>
      <p
        style={{
          ...styles.codetext,
          top: firstTop,
          left: codeLeft,
          color: "grey",
        }}
      >
        {fromCode}
      </p>
      <p style={{ ...styles.text, top: secondTop, left: locationLeft }}>{to}</p>
      <p
        style={{
          ...styles.codetext,
          top: secondTop,
          left: codeLeft,
          color: "grey",
        }}
      >
        {toCode}
      </p>
      <Timer style={{ ...styles.timer, top: timerTop, left: timerLeft }} />
      <img
        className="ss"
        style={styles.image2}
        src={require("./assets/btm.jpg")}
        resizeMode="contain"
      />
      <button style={styles.gif} onClick={() => setShowMain(false)}>
        <img
          style={{ ...styles.gif, top: gifTop, left: gifLeft }}
          src={require("./assets/denmark_circle_cropped.gif")}
        />
      </button>
    </div>
  );
};

export default MainApp;
