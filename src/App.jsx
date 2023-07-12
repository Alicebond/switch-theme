import { useState } from "react";


function App() {
  const [light, setLight] = useState(true);
  const style = light ? "light" : "dark";
  return (
    <main className={"container " + style}>
      <h1>{light ? "Light" : "Dark"} Theme</h1>
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
