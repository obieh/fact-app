import "./style.css";
function App() {
  const appTitle = "Welcome to fact-applet";

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="58" width="58" alt="logo" />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-share btn-open">
          Share a fact
        </button>
      </header>

      <NewFactForm />

      <main className="main">
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
