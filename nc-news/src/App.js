import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p className="user-identifier">User: cooljmessy</p>
        <Link to={"/articles"}>
          <Header />
        </Link>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/topic/:topic" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
