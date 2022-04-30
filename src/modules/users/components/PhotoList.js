import Gallery from "react-grid-gallery";

export default function PhotoList({ photos }) {
  return (
    <Gallery
      enableImageSelection={false}
      rowHeight="200"
      images={photos}
    ></Gallery>
  );
}
