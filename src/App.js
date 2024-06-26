import React from "react";
import NavBar from "./components/navbar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Row post/RowPost";
import {RomanceMovies, action , comedyMovies, horrorMovies, originals } from "./urls";
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies'/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romantic Movies'/>
    </div>
  );
}

export default App;