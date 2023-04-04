import { useEffect, useState } from "react";
import { getMovies } from "../components/Api";
import { useQuery } from "@tanstack/react-query";
import { ImovieData } from "../components/Api";

function Home() {
  const [movies, setMovies] = useState<ImovieData[]>([]);
  const { isLoading, data } = useQuery(["movies", "popular"], getMovies);
  console.log(movies);

  useEffect(() => {
    data && setMovies(data.data.results);
  }, [isLoading]);
  return (
    <div>
      {isLoading
        ? "Loading..."
        : movies.map((e) => (
            <div key={e.id}>
              <h4>{e.title}</h4>
            </div>
          ))}
    </div>
  );
}

export default Home;
