import React from "react";
import blogData from "../data/blog";
import about from './About'
import header from './Header'
import ArticleList from "./ArticleList";

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
