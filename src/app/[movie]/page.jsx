export async function generateSaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id)
  }))
}

export default async function MovieDetails({ params }){
    const { movie } = params;

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json();
    return(
        <div className="mx-40 m-auto">
            <img src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                    alt="movie-image"
                    priority
                    className="my-12 w-1/2 h-[500px] m-auto"
            />
                <h1 className="text-xl">{res.title}</h1>
                <h1 className="text-gray-400">Released Date: {res.release_date}</h1>
                <h1>Runtime: {res.runtime} minutes</h1>
                <h1 className="bg-green-600 inline-block text-white my-2 py-2 px-4 rounded-md text-sm">{res.status}</h1>           
                <p className="mb-4">Rate: {res.vote_average}</p>
                <div className="mb-10">
                    <p className="font-semibold text-lg">Overview</p>
                    <p className="text-gray-300">{res.overview}</p>
                </div>
        </div>
    )
}