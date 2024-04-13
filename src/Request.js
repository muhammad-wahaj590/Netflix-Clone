// const API_KEY1 = process.env.API_KEY;
const API_KEY = "8f5ab4978bb8d4960ef79e44382a2e2c";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCartoonsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchHotMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchExcitingMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,

}





export default request;

