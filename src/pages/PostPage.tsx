import React from "react";
import PostDetail from "../components/PostDetail";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  id: number;
}

const PostPage: React.FC<Props> = ({ posts, setPosts, id }) => {
  const post = posts.find(p => p.id === id);
  if (!post) return <p>Không tìm thấy bài viết</p>;

  const handleDelete = (postId: number) => setPosts(posts.filter(p => p.id !== postId));

  return <PostDetail post={post} onDelete={handleDelete} />;
};

export default PostPage; // <-- cần export để thành module
