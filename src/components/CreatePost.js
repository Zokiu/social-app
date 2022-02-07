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
    let post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    setImage(null);
    imageInputRef.current.value = null;
    inputField.current.value = null;
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
        <div>
          <br></br>
          {content ? (
            <button type="submit">Sumbit post</button>
          ) : (
            <p style={{ color: "red" }}>Please enter some text</p>
          )}
        </div>
        <br></br>
      </form>
    </div>
  );
};

export default CreatePost;
