import React from "react";
import { useState } from "react";
import Timer from "./timer";
import CurrentTimer from "./currentTimer";

import gifspinner from "./assets/denmark_circle_cropped.gif";

const MainApp = ({ from, fromCode, to, toCode, setShowMain, color, firstTopRatio, secondTopRatio }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const firstTop = height * parseFloat(firstTopRatio);
  const secondTop = height * parseFloat(secondTopRatio);
  const locationLeft = width * 0.18;
  const codeLeft = width * 0.75;
  const timerTop = height * 0.58;
  const timerLeft = width * 0.7;
  const gifTop = height * 0.76;
  const gifLeft = width * 0.085;
  const currentTimerTop = height * 0.15;
  const currentTimerLeft = width * 0.38;

  console.log(firstTop);
  console.log(secondTop);

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
      width: width * 0.9,
      height: height * 0.348,
      top: height * 0.17,
      left: width * 0.05,
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
      fontSize: 22,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
    currenttimer: {
      position: "absolute",
      color: "rgba(20,20,20,100)",
      // color: 'white',
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // };

  // React.useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      >
        <img
          style={{
            width: 428,
            height: 527,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src={require("./assets/top.jpg")}
          alt=""
        />
        <img
          style={{
            width: 428,
            height: 465,
            left: 0,
            top: 106,
            position: "absolute",
            zIndex: 2,
          }}
          src={require("./assets/box.jpg")}
          alt=""
        />
        <img
          style={{
            width: 353,
            height: 122,
            left: 36,
            top: 326,
            position: "absolute",
            zIndex: 3,
          }}
          src={require("./assets/arrows.png")}
          alt=""
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
        <p style={{ ...styles.text, top: secondTop, left: locationLeft }}>
          {to}
        </p>
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
        <CurrentTimer
          style={{
            ...styles.currenttimer,
            width: 160,
            height: 36,
            left: 134,
            top: 120,
            position: "absolute",
            textAlign: "center",
            wordWrap: "break-word",
            zIndex: 4,
          }}
        />
        <Timer
          style={{
            ...styles.timer,
            width: 121,
            height: 36,
            left: 268,
            top: 510,
            position: "absolute",
            textAlign: "right",
            wordWrap: "break-word",
            zIndex: 4,
          }}
        />
        <img
          style={{
            width: 428,
            height: 430,
            left: 0,
            top: 571,
            position: "absolute",
          }}
          src={require("./assets/btm.jpg")}
          alt=""
        />
        <img
          style={{
            width: 377,
            height: 152,
            left: 25,
            top: 166,
            position: "absolute",
            zIndex: 3,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          src={require("./assets/map.jpg")}
          alt=""
        />
        <img
          style={{
            width: 149,
            height: 117,
            left: 38,
            top: 668,
            position: "absolute",
          }}
          src={gifspinner}
          alt=""
          onClick={() => setShowMain(false)}
        />
        <div
          style={{ ...styles.background, zIndex: 2, backgroundColor: color }}
        ></div>
      </div>
    </>
  );
};

export default MainApp;
