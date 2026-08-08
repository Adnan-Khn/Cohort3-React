import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className=" flex gap-2">
      Hello
      <h2>{user.name.firstname.toUpperCase()}{" "}{user.name.lastname.toUpperCase()} </h2>
    </div>
  );
};

export default UserCard;
