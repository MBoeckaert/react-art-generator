import Inputs from "./components/Inputs";
import Generator from "./components/Generator";
// import { useState } from "react";

const generalStyling = {
  width: '100vw',
  height: '100vh',
  textAlign: 'center',
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    paddingTop: '2rem',
    paddingBottom: '3rem',
  }, section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '80vh'
  }
}

function App() {

  return (
    <div className="App" style={generalStyling}>
      <h1 class="App-title" style={generalStyling.title}>ReactJS Art Generator</h1>
      <section className="AppContent" style={generalStyling.section}>
        <Inputs />
        <Generator />
      </section>
    </div>
  );
}

export default App;
