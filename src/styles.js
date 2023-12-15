const { width, height } = window.screen;

export const styles = {
  main: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  text: {
    position: "absolute",
    color: "black",
    fontFamily: "Fuse",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
});
