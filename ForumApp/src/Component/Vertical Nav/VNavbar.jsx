import { Link } from "react-router-dom"
import "./vnavbar.css"
import { forumData } from "../../DB/Db"
export const VNavbar = ()=>{
    const {username,name,picUrl} = forumData;
    return(
        <div className="v-nav">
        <div className="verticle-navbar">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/bookmark">BookMark</Link>
        <Link to="/profile">Profile</Link>
        </div>
        <div className="vnav-profile">
            <img src={picUrl} alt="pic" className="profiel-pic"/>
            <div>
                <p>{name}</p>
                <p>{username}</p>
            </div>
        </div>
        </div>
    )
}