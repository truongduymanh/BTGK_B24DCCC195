import React, { useState } from "react";
import { Post } from "../types/Post";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList: React.FC<Props> = ({ posts, setPosts }) => {
  const [filter, setFilter] = useState("");

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Danh sách bài viết ({filteredPosts.length})</h2>
      <input
        type="text"
        placeholder="Tìm theo tiêu đề..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="post-grid">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
