import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const inputOnchange = (e) => {
    setInput(e.target.value);
  };

  return [input, inputOnchange];
}

export default useInput;