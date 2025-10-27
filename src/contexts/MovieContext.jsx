//state manager for favorite movies
import { useState,useEffect,useContext,createContext } from "react";
import Favorites from "../pages/Favorites";
const MovieContext=createContext()
export const useMovieContext=()=>useContext(MovieContext)

//Movie provider will provide state to all components wrapped inside
export const MovieProvider=({children})=>
{
    const[favorites,setFavorites]=useState([])
    useEffect(()=>{
        const storedFavs=localStorage.getItem('favorites')
        //if there are already favories stored
        //all are fav movies stored in array converted into json string to store in localstorage
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    //anytimes favorite changes it will invoke this useefect(we will update the localstorage)
    //if we update favorites localstorage will be updated
    useEffect(()=>
    {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])
    
    //to add a movie to favorites
    const addToFavorites=(movie)=>{
        //prev will give previous fav so that we could add new 'movie' into the array
        setFavorites(prev=>[...prev,movie])
    }
    //to remove a movie from favorites
    //it creates new array without that movie
    const removeFromFavorites=(movieID)=>
    {
        setFavorites(prev=>prev.filter(movie=>movie.id!==movieID))
    }
    //if searching movie is in favorite list
     const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    //these values will be provided to the children
    const value={
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}