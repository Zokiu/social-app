import React, { useState, useRef } from "react";

const CreatePost = ({ user, posts, setPosts }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const inputField = useRef();

  function hadnleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user };
    const newPosts = [post, ...posts];
    setPosts(newPosts);
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
