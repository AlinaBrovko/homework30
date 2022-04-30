import React from "react";
import UserList from "../components/UserList/UserList";
import useUsersList from "../hooks/useUsersList";

export default function UserListPage() {
  const { list } = useUsersList();

  return <UserList users={list} />;
}
