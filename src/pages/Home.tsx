import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css'

function Home() {
    const movieUrl = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${movieUrl}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <h2 className="title">Melhores filmes :</h2>
                    <div className="movies-container">
                        {topMovies.length === 0 && <p>Carregando ...</p>}
                        {topMovies.length > 0 && topMovies.map((movie) => 
                            <MovieCard key={movie.id} movie={movie}/>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;