import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import PostModal from "./PostModal";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Handlers
  const getUsers = async () => {
    setIsLoading(true);
    const results = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
    setPosts(results);
    setIsLoading(false);
  };

  const selectUser = data => {
    setSelectedPost(data);
    setModalIsOpen(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="boxes-wrapper">
        <PostModal initialState={modalIsOpen} closeModalHandler={setModalIsOpen} data={selectedPost} />

        {posts.map(post => (
          <PostItem post={post} key={post.id} selectUser={selectUser} />
        ))}
      </div>
    );
  }
};

export default Posts;
