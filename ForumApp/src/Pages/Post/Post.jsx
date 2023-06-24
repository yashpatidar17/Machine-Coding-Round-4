import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { useParams } from "react-router-dom";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import "./post.css";
import { NavBar } from "../../Component/Nav/Navbar";
import { VNavbar } from "../../Component/Vertical Nav/VNavbar";
export const Post = () => {
  const { upvoteHandler, downvoteHandler,likeHandler,sortedData } = useContext(DataContext);
  const { postID } = useParams();
  const selectedPost = sortedData.find(({ postId }) => postId === postID);
  console.log(postID, "faskofsj");
  return (
    <div className="post-con">
      <NavBar />
      <h2>Post</h2>
      <div className="post-con-first">
        <VNavbar />
        <div key={selectedPost.postId} className="post-card-container">
          <div className="post-card-container-first">
            <KeyboardArrowUpRoundedIcon
              onClick={() => upvoteHandler(selectedPost)}
              style={{ fontSize: "large" }}
            />
            <p>{selectedPost.upvotes - selectedPost.downvotes} </p>
            <KeyboardArrowDownRoundedIcon
              onClick={() => downvoteHandler(selectedPost)}
              style={{ fontSize: "large" }}
            />
          </div>

          <div className="post-card-container-second">
            <div className="post-profile">
              <img
                src={selectedPost.picUrl}
                alt="profile"
                className="profiel-pic"
              />
              <p>Posted By @{selectedPost.username}</p>
              <p></p>
            </div>
            <div className="post-tags">
              {" "}
              <h3>{selectedPost.post}</h3>
              <span>
                {selectedPost.tags.map((item) => (
                  <span>{item} </span>
                ))}
              </span>
            </div>
            <div className="post-des">
              <p>{selectedPost.postDescription}</p>
            </div>

            <div className="post-icon-tray">
            
              <ModeCommentRoundedIcon />
              <ShareRoundedIcon />
              <BookmarkRoundedIcon />
            </div>

            <div>
              <hr />
              {selectedPost.comments.map((item) => (
                <div key={item.commentId} className="post-comment">
                  <div className="comment-container">
                    <img src={item.picUrl} className="profiel-pic" />
                    <div className="comment-container-first">
                      <div>
                        <span>@{item.username}</span>
                      </div>
                      <div>
                        <span>Replying to @{selectedPost.username}</span>
                      </div>
                      <p className="comment-con">{item.comment}</p>
                    </div>
                  </div>
                  <div className="post-icon-tray">
                    <FavoriteRoundedIcon onClick={()=>likeHandler(selectedPost,item)}/> {item.likes}
                    <ModeCommentRoundedIcon />
                    <ShareRoundedIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
