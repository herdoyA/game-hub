import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface ResponseData {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ResponseData>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { loading, games, error };
};

export default useGames;
