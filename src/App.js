import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />


      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} largeRow={true} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );

}

export default App;
