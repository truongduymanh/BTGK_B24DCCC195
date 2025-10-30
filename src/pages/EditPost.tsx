import React from "react";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const EditPost: React.FC<Props & { id: number }> = ({ posts, setPosts, id }) => {
  const post = posts.find(p => p.id === id);
  if (!post) return <p>Không tìm thấy bài viết</p>;

  const handleUpdate = (updated: Omit<Post, "id" | "createdAt">) => {
    setPosts(posts.map(p => (p.id === post.id ? { ...p, ...updated } : p)));
  };

  return <PostForm initialPost={post} onSubmit={handleUpdate} />;
};

export default EditPost; // <-- cần export để thành module
