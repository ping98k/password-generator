import { useEffect, useState } from "react";
import { generatePassword } from "./functions";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("");

  useEffect(() => {
    setPass(generatePassword(length));
  }, [length]);

  return (
    <div className="flex flex-col max-w-xs m-4">
      <h1 className="text-3xl font-bold text-red-500">Password Generator</h1>
      <div className="flex flex-row align-middle my-2">
        <div className="mr-2">{length}</div>
        <input
          type="range"
          min={1}
          max={128}
          step={1}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1 accent-red-500"
        ></input>
      </div>
      <textarea
        value={pass}
        rows={5}
        className="border-red-500 border-solid border-2 p-3 rounded-lg my-2 resize-none"
      />
      <div className="flex flex-row">
        <button className="flex-1 rounded-lg bg-red-500 border-red-500 p-3 border-2 text-white text-center my-2 mr-2">
          Generate
        </button>
        <button className="flex-1 rounded-lg bg-red-500 border-red-500 p-3 border-2 text-white text-center my-2">
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
