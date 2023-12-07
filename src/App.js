import { useState } from "react";
import KeyBoard from "./components/KeyBoard";
import "./App.css"
import { useRef } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppData";

function App() {

  const [state, setState] = useState()
  const inputRef = useRef(null);
  const { keyValue, setKeyValue } = useContext(AppContext)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <KeyBoard />
    </>
  );
}

export default App;
