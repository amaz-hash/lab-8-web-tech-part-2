import React from "react";

function UserInfo({ user }) {
  const { name, email, role, profilePicture } = user;

  return (
    <div className="user-info">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className={`user-role ${role.toLowerCase()}`}>{role}</p>
    </div>
  );
}

export default UserInfo;
