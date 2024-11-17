// src/components/Profile/UserInfo.jsx
import React, { useState } from "react";
import { loadFromLocalStorage } from "../../utils/localStorage";
import ProfileForm from "../Form/ProfileForm";
import Button from "../Button";

const UserInfo = () => {
  const user = loadFromLocalStorage("user");
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return <p>Loading user information...</p>;
  }

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="user-info p-4">
      <h1 className="mb-4">{user.name}</h1>
      <div className="flex items-center max-w-[500px] mb-4">
        <img
          src={user.avatar?.url}
          alt={`holidaze-${user.name}-avatar-image`}
          className="shadow-custom"
        />
      </div>
      <div>
        <h2>Details</h2>
        <p>
          <span className="font-bold">Username: </span>
          {user.name}
        </p>
        <p>
          <span className="font-bold">Email: </span>
          {user.email}
        </p>
        {user.venueManager ? (
          <p>
            <span className="font-bold">Type: </span>Manager & Customer
          </p>
        ) : (
          <p>
            <span className="font-bold">Type: </span> Customer
          </p>
        )}
      </div>
      <div className="mt-4">
        <Button variant="primary" onClick={startEditing}>
          Edit Profile
        </Button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ProfileForm onUpdateSuccess={stopEditing} onClose={stopEditing} />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
