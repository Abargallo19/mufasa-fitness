import React from "react";
// import "./App.css";

function App() {
  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: 'royalblue' // 🤔 color turns to gold, when celebrating
  };
  
  return (
    
    <div className="App" style={style}>
      <header className="App-header">
        <h1>Mufasa Fitness</h1>
      </header>

      <h3>Frontend operational!!</h3>
    </div>
  );
}
console.log('Frontend listening but not showing')
export default App;
