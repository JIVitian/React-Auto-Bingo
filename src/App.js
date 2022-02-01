import "./App.css";
import RoundCounter from "./components/RoundCounter";
import React, { useState } from "react";

function App() {
  const [round, setRound] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AutoBingo</h1>
        <RoundCounter round={round} setRound={setRound} />
      </header>
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default App;
