import { useEffect, useState } from "react";
import { getMovies } from "../components/Api";
import { useQuery } from "@tanstack/react-query";
import { ImovieData } from "../components/Api";
import axios from "axios";

interface Iporps {
  results: ImovieData[];
}

function Home({ results }: Iporps) {
  return (
    <div>
      {results.map((e) => (
        <div key={e.id}>
          <h4>{e.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const {
    data: { results },
  } = await axios.get("http://localhost:3000/api/movies/popular");
  return { props: { results } };
};
