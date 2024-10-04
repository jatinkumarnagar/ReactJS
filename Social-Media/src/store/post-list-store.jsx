import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      // Return the updated list after deleting the specified post
      return currPostList.filter(post => post.id !== action.payload.postId);
    case "ADD_POST":
      // Return a new array with the added post at the beginning
      return [action.payload, ...currPostList];
    case "ADD_INITIAL_POST":
      return action.payload.posts;
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        Body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POST',
      payload: {
        posts,
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "This is Title One.",
//     Body: "This is Body One.",
//     reactions: 2,
//     userId: "user-1",
//     tags: ["One", "Two", "Three"],
//   },
//   {
//     id: "2",
//     title: "This is Title Two.",
//     Body: "This is Body Two.",
//     reactions: 4,
//     userId: "user-2",
//     tags: ["Four", "Five", "Six"],
//   },
// ];

export default PostListProvider;
