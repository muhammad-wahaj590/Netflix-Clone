import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import request from '../Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>

        <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals}
        isLargeRow
         />
        <Row title="Trending Now" fetchURL={request.fetchTrending} isLargeRow/>
        <Row title="Top Rated" fetchURL={request.fetchTopRated} isLargeRow/>
        <Row title="Romantic Movies" fetchURL={request.fetchRomanceMovies}  isLargeRow/>
        <Row title="Action & Adventure Movies" fetchURL={request.fetchActionMovies} isLargeRow/>
        <Row title="TV Comedies" fetchURL={request.fetchComedyMovies} isLargeRow/>
        <Row title="Mystery Movies" fetchURL={request.fetchMysteryMovies} isLargeRow/>
        <Row title="Children & Family TV" fetchURL={request.fetchCartoonsMovies} isLargeRow/>
        <Row title="Exciting Movies" fetchURL={request.fetchExcitingMovies} isLargeRow/>
        <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} isLargeRow/>
        <Row title="Documentaries" fetchURL={request.fetchDocumentaries} isLargeRow/>
    </div>
  )
}

export default HomeScreen
