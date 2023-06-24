import { useContext } from "react"
import "./sort.css"
import { DataContext } from "../../Context/DataContextProvider"
export const Sorting =()=>{
    const {latestHandler,upvoteSortHandler} = useContext(DataContext);
    return(
        <div className="sorting-container">
            <lable>
            <input type="radio" name="sort" value="lastest" onChange={(e)=>latestHandler(e)}/>
            Latest Post
            </lable>
            <lable>
            <input type="radio" name="sort" value="upvote" onChange={(e)=>upvoteSortHandler(e)}/>
            Most UpVoted Post
            </lable>
        </div>
    )
}