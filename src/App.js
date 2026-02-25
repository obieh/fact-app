import "./style.css";
function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="58" width="58" alt="logo" />
          <h1>Welcome to fact-applet.</h1>
        </div>

        <button className="btn btn-large btn-share btn-open">
          Share a fact
        </button>
      </header>

      <NewFactForm />

      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
