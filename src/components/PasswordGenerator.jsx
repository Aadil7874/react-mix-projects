import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numFeature, setNumFeature] = useState(false);
  const [charFeature, setCharFeature] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(false);
  console.log(passwordRef);

  //   const [inputVal, setInputVal] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numFeature) str += "0123456789";
    if (charFeature) str += "!@#$%^&*-_+=[]{}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numFeature, charFeature]);
  //   }, [length, numFeature, charFeature, setPassword]);
  //   setPassword(passwordGenerator);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numFeature, charFeature, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-4xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numFeature}
            id="numberInput"
            onChange={() => setNumFeature((prev) => !prev)}
          />
          <label htmlFor="numberInput"> Number: {numFeature}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charFeature}
            id="characterInput"
            onChange={() => setCharFeature((prev) => !prev)}
          />
          <label htmlFor="carInput"> Characters: {charFeature}</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
