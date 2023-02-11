import { useCallback, useEffect, useState } from "react";
import { generatePassword, generateBase64 } from "./functions";
import "./App.css";

function App() {
  const [isBase64, setIsBase64] = useState(false);
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("");

  const generate = useCallback(() => {
    if (isBase64) {
      setPass(generateBase64(length));
    } else {
      setPass(generatePassword(length));
    }
  }, [length, isBase64]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div className="flex flex-col max-w-xs m-4">
      <h1 className="text-3xl font-bold text-red-500">Password Generator</h1>
      <button
        onClick={() => {
          setIsBase64(!isBase64);
        }}
        className="flex-1 rounded-lg bg-red-500 border-red-500 p-3 border-2 text-white text-center my-2"
      >
        Mode {isBase64 ? "Base64" : "Password"}
      </button>
      <div className="flex flex-row align-middle my-2">
        <div className="mr-2">{length}</div>
        <input
          type="range"
          min={6}
          max={128}
          step={1}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1 accent-red-500"
        ></input>
      </div>
      <textarea
        value={pass}
        onChange={() => {}}
        rows={5}
        className="border-red-500 border-solid border-2 p-3 rounded-lg my-2 resize-none"
      />
      <div className="flex flex-row">
        <button
          onClick={generate}
          className="flex-1 rounded-lg bg-red-500 border-red-500 p-3 border-2 text-white text-center my-2 mr-2"
        >
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
