import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/movieCard/movieCard";
import './Home.css';
export default function Home() {
  const [movies, setmovies] = useState(null);

async function getMovies() {
const response = await fetch(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=1e1dda8042f59fdaaa1e8d8a0c30ee17`
);
const data = await response.json();
setmovies(data.results);
}

useEffect(() => {
getMovies();
}, []);

  return (
    <>
      <Navbar />
      {movies != null ? (
      
  
          <div className="home-page movies-section py-5">
              <div className="container ">
              <div className="row g-4">
              
             {movies.map((movie)=><MovieCard movieDetails = {movie} key={movie.id} /> )}  

              </div>
            </div>


          </div>


            
      
     
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
