import React, { useState, useEffect, useCallback, createContext } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export const UserContext = React.createContext();
// UserContext.Consumer;

const App = () => {
  const [user, setUser] = useState("manjaca");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? user : "Login";
  }, [user]);

  const hadnleAddPost = React.useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <UserContext.Provider value={user}>
      This is mian app
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} hadnleAddPost={hadnleAddPost} />
      <PostList posts={posts} />
    </UserContext.Provider>
  );
};

export default App;
