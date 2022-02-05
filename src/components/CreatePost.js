import React, { useState, useRef } from "react";
import { PostContext } from "../App";

const CreatePost = ({ user }) => {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const inputField = useRef();

  function hadnleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user, id: Date.now() };
    //    hadnleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } });
    console.log(post);
    imageInputRef.current.value = "";
    inputField.current.value = "";
  }

  return (
    <div>
      <p>Create new post</p>
      <form onSubmit={hadnleSubmit}>
        <input
          type="text"
          placeholder="Add post content"
          onChange={(event) => setContent(event.target.value)}
          ref={inputField}
        />

        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Sumbit post</button>
      </form>
    </div>
  );
};

export default CreatePost;
