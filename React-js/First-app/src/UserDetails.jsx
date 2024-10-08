import React from "react";

const UserDetails = ({ data }) => {
  return (
    <section>
      {data.map((item) => {
        const {
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
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "16px",
              textAlign: "center",
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
            {/* <button onClick={onToggleFollow}>
              {is_following ? "Unfollow" : "Follow"}
            </button> */}
          </div>
        );
      })}
    </section>
  );
};

export default UserDetails;
