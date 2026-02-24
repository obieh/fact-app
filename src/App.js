import "./style.css";
function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="58" width="58" alt="logo" />
        <h1>Welcome to fact-applet.</h1>
      </div>

      <button className="btn btn-large btn-share btn-open">Share a fact</button>
    </header>
  );
}

export default App;
