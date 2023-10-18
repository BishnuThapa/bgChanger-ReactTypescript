import { useState } from "react";
function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div
        className="bg-green-500 w-100 h-80"
        style={{ backgroundColor: color }}
      ></div>
      <div className="my-5 grid justify-items-center w-100">
        <button
          onClick={() => setColor("red")}
          className="bg-red-600 justify-center rounded mb-4 px-5 py-2 text-white"
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 rounded mb-4 px-5 py-2 text-white"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 rounded mb-4 px-5 py-2 text-white"
        >
          Blue
        </button>
      </div>
    </>
  );
}

export default App;
