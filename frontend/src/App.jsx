import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Navbar />

      <section><Hero /></section>
      
      <section><Projects /></section>
      
      <section><About /></section>

      <section><Contact /></section>
      
    </div>
  );
}

export default App;