import { useEffect, useState } from "react";
import { fetchUsers } from "../services/usersService";

export default function useUsersList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchUsers().then(({ data }) => setList(data));
  }, []);

  return { list };
}
