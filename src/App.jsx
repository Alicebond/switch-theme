import { useState } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState(true);
  const style = light ? "light" : "dark";
  return (
    <main>
      <h1 className={style}>{light ? "Light" : "Dark"} Theme</h1>
      <button
        onClick={() => setLight((prevValue) => !prevValue)}
        className={style}
      >
        Switch Theme
      </button>
    </main>
  );
}

export default App;
