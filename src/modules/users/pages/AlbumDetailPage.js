import { useParams } from "react-router-dom";
import PhotoList from "../components/PhotoList";
import useAlbumPhotos from "../hooks/useAlbumPhotos";

export default function AlbumDetailPage() {
  const { albumId } = useParams();
  const { photos } = useAlbumPhotos(albumId);
  return <PhotoList photos={photos} />;
}
