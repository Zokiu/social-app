import React from "react";
import { UserContext } from "../App";

const Post = ({ image, content, user }) => {
  // const iscurrentUser = currentUser === user;
  return (
    <UserContext.Consumer>
      {(currentUser) => (
        <>
          {image && (
            <img
              style={{ height: "100", width: "200", objectFit: "cover" }}
              src={URL.createObjectURL(image)}
              alt="post cover"
            />
          )}

          <p>{content} </p>
          <div style={{ color: currentUser === user && "green" }}>{user}</div>
        </>
      )}
    </UserContext.Consumer>
  );
};

export default Post;
