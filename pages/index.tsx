import { useEffect, useState } from "react";
import { getMovies } from "../components/Api";
import { useQuery } from "@tanstack/react-query";
import { ImovieData } from "../components/Api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

interface Iporps {
  results: ImovieData[];
}

function Home({ results }: Iporps) {
  const router = useRouter();
  const onClick = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div>
      {results.map((e) => (
        <div key={e.id} style={{ cursor: "pointer" }}>
          <Link href={`/movies/${e.title}/${e.id}`}>
            <a>
              <h4>{e.title}</h4>
            </a>
          </Link>
          <img
            src="/vercel.svg"
            alt=""
            style={{ width: "50px" }}
            onClick={() => onClick(`${e.id}`, e.title)}
          />
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
