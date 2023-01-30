import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App  d-flex flex-column">
      <Header></Header>
      {/* <Hero></Hero> */}
      <Main></Main>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
