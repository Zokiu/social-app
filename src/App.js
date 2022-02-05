import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = React.createContext();
export const PostContext = React.createContext({ posts: [] });
// UserContext.Consumer;

const App = () => {
  const initialPostState = React.useContext(PostContext);
  const [state, dispatch] = React.useReducer(postReducer, initialPostState);
  const [user, setUser] = useState("Zokiu");
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? user : "Login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        This is mian app
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default App;
