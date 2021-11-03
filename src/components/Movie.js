import React from "react";
import PropType from "prop-types";
import './Movie.css';

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} title={title} alt={title} />
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
            <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="movie__genre">{genre}</li>;
                })}
            </ul>
        </div>
    )
}

Movie.PropType = {
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.string.isRequired
}

export default Movie;