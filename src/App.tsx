import "./App.css";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Lost in Lines</h1>
      </header>
      <main className="gallery-container">
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;
