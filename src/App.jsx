import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import './css/App.css'
import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { MovieProvider } from "./contexts/Moviecontext"
export default function App()
{
  return(
    <MovieProvider>
      <Navbar/>
    <main className="main-content">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </main>
    </MovieProvider>
  )
}