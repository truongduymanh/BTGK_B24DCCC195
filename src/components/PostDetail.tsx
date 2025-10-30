import React from "react";
import { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostDetail: React.FC<Props> = ({ post, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt={post.title} />
      <p>Tác giả: {post.author}</p>
      <p>Ngày đăng: {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>Thể loại: {post.category}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate("/")}>Quay lại</button>
      <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
      <button onClick={() => window.confirm("Bạn có chắc muốn xóa bài viết này?") && onDelete(post.id)}>
        Xóa bài viết
      </button>
    </div>
  );
};

export default PostDetail;
