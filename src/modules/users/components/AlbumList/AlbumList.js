import { Link, useLocation } from "react-router-dom";
import "./AlbumList.css";

export default function AlbumList({ albums }) {
  const { pathname } = useLocation();
  const size = 4;
  const chunks = albums.reduce((res, curr, i) => {
    if (!(i % size)) {
      res.push(albums.slice(i, i + size));
    }
    return res;
  }, []);
  return (
    <table className="album-list">
      <tbody>
        {chunks.map((chunk, index) => {
          return (
            <tr key={index}>
              {chunk.map((item) => (
                <td key={item.id}>
                  <Link to={`${pathname}/${item.id}`}>
                    <div key={"1" + item.id} className="album-folder"></div>
                    <div key={"2" + item.id} className="album-title">
                      {item.title}
                    </div>
                  </Link>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
