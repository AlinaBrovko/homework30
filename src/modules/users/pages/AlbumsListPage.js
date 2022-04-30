import { useParams } from "react-router-dom";
import AlbumList from "../components/AlbumList/AlbumList";
import useUserAlbums from "../hooks/useUserAlbums";

export default function AlbumsListPage() {
  const { id } = useParams();
  const { albums } = useUserAlbums(id);

  return <AlbumList albums={albums} />;
}
