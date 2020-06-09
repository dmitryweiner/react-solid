import React from "react";
import User from "./User";

export default function UsersList({users}) {
  return <>
    {users.map(user => (
      <User name={user.name} email={user.email}/>
    ))}
    </>;
}
