import { forumData } from "../../DB/Db"

export const Profile = ()=>{

    const {username,name,picUrl} = forumData
    return(
        <div>
            <img src={picUrl} className="profiel-pic" />
            <div>
                <p>{name}</p>
                <p>{username}</p>
            </div>
        </div>
    )
}