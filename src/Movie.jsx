import Link from "next/link";

export default function Movie ({
          id,
          title,
          image,
          release_date,
        })
{
    return(
        <div className="">
            <Link href={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original${image}`} 
                    width={350}
                    height={250}
                    alt={title}
                />
            </Link>
                <h1 className="text-xl px-4 py-3">{title}</h1>
        </div>
    )
}