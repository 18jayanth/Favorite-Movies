import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/Moviecontext'
export default function MovieCard({movie})
{
    //now we can access these functions in this component
    const {isFavorite,addToFavorites,removeFromFavorites}=useMovieContext()
    const favorite=isFavorite(movie.id)
    function handleFavorite(e)
    {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
        
    }
    return <div className="movie-card">
            <div className="movie-poster">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleFavorite}>♥</button>
            </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

        </div>
    
}