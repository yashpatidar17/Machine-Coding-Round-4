import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import { NavBar } from "../../Component/Nav/Navbar";

export const BookMark = () => {
  const { bookmark, upvoteHandler, downvoteHandler, bookMarkHandler } =
    useContext(DataContext);
  return (
    <div>
    <NavBar/>
        <h2>Bookmark</h2>
      {bookmark?.map((post) => (
        <div key={post.postId} className="post-card-container">
          <div className="post-card-container-first">
            <KeyboardArrowUpRoundedIcon
              onClick={() => upvoteHandler(post)}
              style={{ fontSize: "large" }}
            />
            <p>{post.upvotes - post.downvotes} </p>
            <KeyboardArrowDownRoundedIcon
              onClick={() => downvoteHandler(post)}
              style={{ fontSize: "large" }}
            />
          </div>

          <div className="post-card-container-second">
            <div className="post-profile">
              <img src={post.picUrl} alt="profile" className="profiel-pic" />
              <p>Posted By @{post.username}</p>
              <p></p>
            </div>
            <div className="post-tags">
              <Link key={post.postId} to={`/post/${post.postId}`}>
                {" "}
                <h3>{post.post}</h3>
              </Link>
              <span>
                {post.tags.map((item) => (
                  <span>{item} </span>
                ))}
              </span>
            </div>
            <div className="post-des">
              <p>{post.postDescription}</p>
            </div>

            <div className="post-icon-tray">
              <Link key={post.postId} to={`/post/${post.postId}`}>
                <ModeCommentRoundedIcon />
              </Link>
              <ShareRoundedIcon />
              <BookmarkRoundedIcon onClick={() => bookMarkHandler(post)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
