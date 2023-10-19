const movies = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    { title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
    { title: 'Forrest Gump', genre: 'Drama', rating: 8.8 },
    { title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
];

function showMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '<h3>Movies</h3>';

    for (const movie of movies) {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <p><a href="#" onclick="showMovieDetails('${movie.title}')">${movie.title}</a></p>
            <p>Genre: ${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieList.appendChild(movieItem);
    }
}

function showMovieDetails(movieTitle) {
    const movieDetails = document.getElementById('movieDetails');
    const selectedMovie = movies.find(movie => movie.title === movieTitle);

    if (selectedMovie) {
        movieDetails.innerHTML = `
            <h3>${selectedMovie.title}</h3>
            <p>Genre: ${selectedMovie.genre}</p>
            <p>Rating: ${selectedMovie.rating}</p>
        `;
    }
}

function showRecommendations() {
    const genre = prompt('Enter your preferred genre:');
    const minRating = parseFloat(prompt('Enter the minimum rating (0-10):'));

    if (genre && !isNaN(minRating)) {
        const recommendedMovies = movies.filter(movie => movie.genre === genre && movie.rating >= minRating);
        showMovies();
        showRecommendedMovies(recommendedMovies);
    } else {
        alert('Invalid input. Please enter valid genre and rating.');
    }
}

function showRecommendedMovies(recommendedMovies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '<h3>Recommended Movies</h3>';

    if (recommendedMovies.length > 0) {
        for (const movie of recommendedMovies) {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <p><a href="#" onclick="showMovieDetails('${movie.title}')">${movie.title}</a></p>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            `;
            movieList.appendChild(movieItem);
        }
    } else {
        movieList.innerHTML = '<p>No recommendations found.</p>';
    }
}

showMovies();
