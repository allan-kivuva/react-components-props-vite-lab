import React from "react";
import blogData from "../data/blog";
import about from './about'
import header from './header'
import ArticleList from "./article-list";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <header  />
    <about />
    <ArticleList />
    
    </div>
  );
}

export default App;
