import React from "react";

const UserDetails = (props) => {
  const { userData, onToggleFollow } = props;

  return (
    <section>
      {userData.map((item) => {
        const {
          id,
          first_name,
          last_name,
          address,
          karma,
          followers,
          posts,
          is_following,
          avatar,
        } = item;
        return (
          <div
            key={id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "16px",
              textAlign: "center",
              display: "flex",
              gap: "20px",
            }}
          >
            <img
              src={avatar}
              alt={"error"}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h2>{first_name}</h2>
            <h2>{last_name}</h2>
            <p>{address}</p>
            <p>Karma: {karma}</p>
            <p>Followers: {followers}</p>
            <p>Posts: {posts}</p>
            <button onClick={onToggleFollow(item)}>
              {is_following ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default UserDetails;
