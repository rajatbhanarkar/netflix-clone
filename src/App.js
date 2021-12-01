import './App.css';
import React from 'react';
import Row from './Row';
import './App.css';
import './Row.css';
import requests from './requests';
import Banner from './Banner.js'
import Nav from './Nav';

//https://api.themoviedb.org/3/movie/550?api_key=ebaf7b455addf31776b8888fc2f03ffe

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
