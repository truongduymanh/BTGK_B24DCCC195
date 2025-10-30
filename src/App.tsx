import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import { Post } from "./types/Post";

const initialPosts: Post[] = [
  { id: 1, title: "React là gì?", author: "Mạnh", thumbnail: "https://via.placeholder.com/150", content: "React là thư viện JS...", category: "Công nghệ", createdAt: new Date().toISOString() },
  { id: 2, title: "Du lịch Đà Lạt", author: "Lan", thumbnail: "https://via.placeholder.com/150", content: "Đà Lạt là thành phố...", category: "Du lịch", createdAt: new Date().toISOString() },
  { id: 3, title: "Món ăn Việt Nam", author: "An", thumbnail: "https://via.placeholder.com/150", content: "Việt Nam có nhiều món ăn...", category: "Ẩm thực", createdAt: new Date().toISOString() },
  { id: 4, title: "Cuộc sống hiện đại", author: "Hùng", thumbnail: "https://via.placeholder.com/150", content: "Đời sống hiện đại...", category: "Đời sống", createdAt: new Date().toISOString() },
  { id: 5, title: "Khác nhau giữa JS và TS", author: "Mạnh", thumbnail: "https://via.placeholder.com/150", content: "JS và TS có điểm khác nhau...", category: "Công nghệ", createdAt: new Date().toISOString() },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<PostForm onSubmit={(post) => {
          const newPost: Post = { ...post, id: Date.now(), createdAt: new Date().toISOString() };
          setPosts([newPost, ...posts]);
        }} />} />
        <Route path="/posts/:id" element={<PostPage posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

// Trang chi tiết
const PostPage: React.FC<{ posts: Post[]; setPosts: React.Dispatch<React.SetStateAction<Post[]>> }> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));
  if (!post) return <p>Không tìm thấy bài viết</p>;

  const handleDelete = (postId: number) => setPosts(posts.filter(p => p.id !== postId));

  return <PostDetail post={post} onDelete={handleDelete} />;
};

// Trang chỉnh sửa
const EditPost: React.FC<{ posts: Post[]; setPosts: React.Dispatch<React.SetStateAction<Post[]>> }> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));
  if (!post) return <p>Không tìm thấy bài viết</p>;

  const handleUpdate = (updated: Omit<Post, "id" | "createdAt">) => {
    setPosts(posts.map(p => p.id === post.id ? { ...p, ...updated } : p));
  };

  return <PostForm initialPost={post} onSubmit={handleUpdate} />;
};

export default App;
