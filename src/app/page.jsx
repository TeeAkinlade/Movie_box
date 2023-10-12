import Movie from "@/Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-8 md:mx-16 lg:mx-24">
        {res.results.map((movie) => ( 
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            language={movie.original_language}
            image={movie.poster_path}
            release_date={movie.release_date}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </main>
  )
}
