import { createContext, useState } from "react";
import { forumData } from "../DB/Db";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(forumData.posts);
  const [bookmark,setBookmark] = useState([]);
  const [latest,setLatest] = useState("")
  const [upvote,setUpvote] = useState("")
  const upvoteHandler = (post) => {
    const updatedPost = posts.map((p) => {
      if (p.postId === post.postId) {
        return { ...p, upvotes: p.upvotes + 1 };
      }
      return p;
    });

    setPosts(updatedPost);
  };
  const downvoteHandler = (post) => {
    const updatedPost = posts.map((p) => {
      if (p.postId === post.postId) {
        return { ...p, downvotes: p.downvotes + 1 };
      }
      return p;
    });

    setPosts(updatedPost);
  };

  const likeHandler = (selectedPost,item)=>{
    const updatedPost = posts.map((p) => {
      if (p.postId === selectedPost.postId) {
        const updatedComments = p.comments.map((c) => {
          if (c.commentId === item.commentId) {
            return { ...c, likes: c.likes + 1 };
          }
          return c;
        });
        return { ...p, comments: updatedComments };
      }
      return p;
    });
  
    setPosts(updatedPost);
  }

  const latestHandler = (e)=>{
    setLatest(e.target.value)
  }
  console.log(upvote);

  const upvoteSortHandler = (e)=>{
    setUpvote(e.target.value)
  }
  
  const appliedFilter = () => {
    let sortedPost = [...posts];
  
    if (latest.length > 0) {
      return sortedPost.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
  
    if(upvote === "upvote"){
      return sortedPost.sort((a,b)=>b.upvotes - a.upvotes);
    }

    return sortedPost;
  };

  const bookMarkHandler = (selectedPost)=>{
      setBookmark((prev)=> [...prev,selectedPost])
  }
 
  console.log(bookmark)

  const sortedData = appliedFilter();
  return (
    <div>
      <DataContext.Provider
        value={{ item: 3, posts, upvoteHandler, downvoteHandler,likeHandler,latestHandler,bookMarkHandler,sortedData,upvoteSortHandler }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
