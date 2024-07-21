import { useState } from "react";

const Bulb = () => {
  console.log("only light rendering");

  const [lightstate, setLight] = useState("OFF");
  const lightOnOff = () => {
    setLight(lightstate === "OFF" ? "ON" : "OFF");
  };

  return (
    <>
      {lightstate === "OFF" ? (
        <h1 style={{ backgroundColor: "gray" }}>전구상태 : {lightstate} </h1>
      ) : (
        <h1 style={{ backgroundColor: "orange" }}>전구상태 : {lightstate} </h1>
      )}

      <button onClick={lightOnOff}>
        전구 {lightstate === "OFF" ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default Bulb;
