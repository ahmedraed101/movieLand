import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import MoviePage from './components/MoviePage'

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<App />}></Route>
                <Route path='/movie/:id' element={<MoviePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routes
