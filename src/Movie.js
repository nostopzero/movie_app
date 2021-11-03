import React from "react";
import PropType from "prop-types";

function Movie({title, year, summary, poster}) {
    return (
        <div class="movie__data">
            <img src={poster} title={title} alt={title} />
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    )
}

Movie.PropType = {
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
}

export default Movie;