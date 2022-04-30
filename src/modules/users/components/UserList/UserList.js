import { Link, useLocation } from "react-router-dom";
import "./UserList.css";
export default function UserList({ users }) {
  const { pathname } = useLocation();
  return (
    <table className="users">
      <tbody>
        {users.map((item) => {
          return (
            <tr key={item.id} className="user">
              <td>
                {item.name} <span>{item.email}</span>
              </td>
              <td className="action">
                <Link to={`${pathname}${item.id}`}>
                  <div>Albums</div>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
