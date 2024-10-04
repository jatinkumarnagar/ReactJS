import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="card m-5" style={{ width: "30rem" }}>
        <div className="card-body">
          <button
            className="postion-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </button>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.Body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-1">
              {tag}
            </span>
          ))}
          <div className="alert alert-success mt-2" role="alert">
            The post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
