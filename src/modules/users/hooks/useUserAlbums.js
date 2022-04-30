import { useEffect, useState } from "react";
import { fetchAlbums } from "../services/usersService";

export default function useUserAlbums(id) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetchAlbums(id).then(({ data }) => setAlbums(data));
  }, []);

  return { albums };
}
