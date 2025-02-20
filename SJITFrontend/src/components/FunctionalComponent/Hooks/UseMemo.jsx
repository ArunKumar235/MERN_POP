import { useState, useMemo } from "react";

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = useMemo(() => {
    return {
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
    };
  }, [theme]);
  var doubleUp = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div style={styling}>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h1>UseMemo.jsx</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>The number is {number}</h3>
      <h3>The double of number is {doubleUp}</h3>
    </div>
  );
};

export default UseMemo;
