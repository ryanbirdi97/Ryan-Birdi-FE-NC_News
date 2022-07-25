import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ArticleList />
      </div>
    </BrowserRouter>
  );
}

export default App;
