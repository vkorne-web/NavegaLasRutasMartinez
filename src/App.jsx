import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        <ItemListContainer greeting="¡Bienvenido a TechStore!" />
      </main>
    </div>
  );
}

export default App;

