import { useEffect, useState } from "react";
import { fetchPhotos } from "../services/usersService";

export default function useAlbumPhotos(id) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchPhotos(id).then(({ data }) => {
      data.map((photo) => {
        photo.thumbnail = photo.thumbnailUrl;
        photo.thumbnailWidth = 150;
        photo.thumbnailHeight = 150;
        photo.src = photo.url;
        photo.caption = photo.title;

        return photo;
      });
      setPhotos(data);
    });
  }, []);

  return { photos };
}
