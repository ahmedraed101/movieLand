import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import API_KEY from './../creds/api_key'

const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}&`

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const reponse = await fetch(`${API_URL}i=${id}`)
            const data = await reponse.json()
            setMovie(data)
        }
        fetchData()
    }, [])

    console.log(movie)
    return (
        <div className='app'>
            <img src={movie.Poster} alt='' />
            <h2>{movie.Title}</h2>
        </div>
    )
}

export default MoviePage
