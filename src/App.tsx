import { useState } from "react";
function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="bg-green-500 w-100 h-80"></div>
      <div className="my-5 grid justify-items-center w-100">
        <button className="bg-red-600 rounded mx-auto px-5 py-2 text-white">
          Red
        </button>
        <button className="bg-red-600 rounded mx-auto px-5 py-2 text-white">
          Black
        </button>
        <button className="bg-red-600 rounded mx-auto px-5 py-2 text-white">
          Blue
        </button>
      </div>
    </>
  );
}

export default App;
