import React from "react";
import { UserContext, PostContext } from "../App";

const Post = ({ image, content, user, id }) => {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const iscurrentUser = currentUser === user;

  function handleDelete() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

  return (
    <>
      {image && (
        <img
          style={{ height: "100", width: "200", objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="post cover"
        />
      )}

      <p>{content} </p>
      <div style={{ color: iscurrentUser && "green" }}>{user}</div>
      <div>
        {iscurrentUser && <button onClick={handleDelete}>Delete</button>}
      </div>
    </>
  );
};

export default Post;
