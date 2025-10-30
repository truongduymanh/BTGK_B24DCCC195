import React from "react";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const CreatePost: React.FC<Props> = ({ posts, setPosts }) => {
  return (
    <div>
      <h2>Tạo bài viết mới</h2>
      <PostForm onSubmit={(newPost) => {
        const post: Post = { ...newPost, id: Date.now(), createdAt: new Date().toISOString() };
        setPosts([post, ...posts]);
      }} />
    </div>
  );
};

export default CreatePost; // <-- export ở đây
