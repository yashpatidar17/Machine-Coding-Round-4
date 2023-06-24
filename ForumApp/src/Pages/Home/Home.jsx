import { Forum } from "../../Component/Forum/Forum"
import { NavBar } from "../../Component/Nav/Navbar"
import { Sorting } from "../../Component/Sort/Sorting"
import { VNavbar } from "../../Component/Vertical Nav/VNavbar"
import "./home.css"
export const Home = ()=>{
    return(
        <div>
        <div>
            <NavBar/>
        </div>
        <div className="main-container">
        <div>
            <VNavbar/>
        </div>
        <div>
            <Forum/>
        </div>
        <div>
            <Sorting/>
        </div>
        </div>
        
        </div>
    )
}