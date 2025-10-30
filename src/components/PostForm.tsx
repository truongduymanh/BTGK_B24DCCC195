import React, { useState } from "react";
import { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

interface Props {
  initialPost?: Post;
  onSubmit: (post: Omit<Post, "id" | "createdAt">) => void;
}

const PostForm: React.FC<Props> = ({ initialPost, onSubmit }) => {
  const [title, setTitle] = useState(initialPost?.title || "");
  const [author, setAuthor] = useState(initialPost?.author || "");
  const [thumbnail, setThumbnail] = useState(initialPost?.thumbnail || "");
  const [content, setContent] = useState(initialPost?.content || "");
  const [category, setCategory] = useState(initialPost?.category || "Công nghệ");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title.length < 10) return alert("Tiêu đề ít nhất 10 ký tự");
    if (author.length < 3) return alert("Tác giả ít nhất 3 ký tự");
    if (content.length < 50) return alert("Nội dung ít nhất 50 ký tự");

    onSubmit({ title, author, thumbnail, content, category });
    navigate(initialPost ? `/posts/${initialPost.id}` : "/");
    alert(initialPost ? "Cập nhật thành công!" : "Đăng bài thành công!");
  };

  return (
    <div className="post-form">
      <label>Tiêu đề:</label>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <label>Tác giả:</label>
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      <label>URL ảnh thumbnail:</label>
      <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
      <label>Nội dung:</label>
      <textarea rows={10} value={content} onChange={e => setContent(e.target.value)} />
      <label>Thể loại:</label>
      <select value={category} onChange={e => setCategory(e.target.value as Post["category"])}>
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <button onClick={handleSubmit}>{initialPost ? "Cập nhật" : "Đăng bài"}</button>
      <button onClick={() => navigate(initialPost ? `/posts/${initialPost.id}` : "/")}>Hủy</button>
    </div>
  );
};

export default PostForm;
