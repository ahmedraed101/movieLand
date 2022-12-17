import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

import './styles/App.css'
import API_KEY from './creds/api_key'

const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}&`

const App = () => {
    const [movies, setMovies] = useState([])
    const searchMovies = async (title) => {
        try {
            const reponse = await fetch(`${API_URL}s=${title}`)
            const data = await reponse.json()
            if (data.Response === 'False') {
                throw new Error(data.Error)
            }
            console.log(data)
            setMovies(data.Search)
        } catch (e) {
            setMovies([])
        }
    }
    return (
        <div className='app'>
            <h1 className='fade-in-left'>MovieLand</h1>
            <SearchBar searchMovies={searchMovies} />
            {movies.length !== 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2 className='fade-in'>No Movies Found</h2>
                </div>
            )}
        </div>
    )
}

export default App
