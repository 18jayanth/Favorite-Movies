import '../css/Home.css'
import { useState,useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies,getPopularMovies } from '../services/api';
export default function Home()
{
    
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
    
     useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

    const handleSubmit=async(e)=>
    {
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true)
        try{
        const searchresults = await searchMovies(searchQuery);
        setMovies(searchresults)
        setError(null)

        }
        catch(err)
        {
          console.log(err)
        setError('failed to search the movie...')
        }finally{
          setLoading(false)
        }
        setSearchQuery('')
    }
    return(
        <div className='home'>
        <form onSubmit={handleSubmit} className='search-form'>
          
        <input type='text' placeholder='search for movies...' className='search-input'
        value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
        <button type='submit' className='search-button'>Search</button>

        </form>
        {error && <div className='error-message'>{error}</div>}
        {loading?<div className='loading'>Loading</div>:
        <div className='movies-grid'>
        {movies.map(movie=>
        <MovieCard movie={movie} key={movie.id}/>)}
        </div>}
        </div>
    )
}