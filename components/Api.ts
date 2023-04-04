import axios from "axios";

export interface ImovieData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = async () => {
  try {
    const api = await axios.get(
        "/api/movies/popular"
    );
    if (api.status === 200) return api;
  } catch (err) {
    console.dir(err);
  }
};
