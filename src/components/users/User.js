import React from "react";

export default function User({name, email}) {
  return <>
    <tr>
      <td>{name}</td>
      <td>
        <a href={`mailto:${email}`}>{email}</a>
      </td>
    </tr>
  </>;
}
