import api from "../../../api";

export function fetchUsers() {
  return api.get("users");
}

export function fetchAlbums(id) {
  return api.get("albums?userId=" + id);
}

export function fetchPhotos(id) {
  return api.get("photos?albumId=" + id);
}
