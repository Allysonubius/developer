import { useEffect , useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css'

function Search() {
    const searchUrl = import.meta.env.VITE_SEARCH;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");
    
    const getSearchMovies = async (url: RequestInfo | URL) => {
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error('Newtwork response was not ok');
            }
            const data = await res.json();
            setMovies(data.results);
        }catch(error){
            console.log('Error fetching data: ', error)
        }
    }


    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
        getSearchMovies(searchWithQueryUrl);
    }, [query]);

    return (
        <>
            <section>
                <div className="container">
                    <h2 className="title">Resultado para :
                        <span className='query-text'>{ query }</span>
                    </h2>
                    <div className="movies-container">
                        {movies.length === 0 && <p>Carregando ...</p>}
                        {movies.length > 0 && movies.map((movie) => 
                            <MovieCard key={movie.id} movie={movie}/>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search;