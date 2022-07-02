import React from "react";

function Profile({ img }) {
  return (
    <div className="profile">
      <img src={img} alt="profile" />
    </div>
  );
}

export default Profile;
