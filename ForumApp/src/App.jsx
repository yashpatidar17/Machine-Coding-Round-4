import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./Pages/Home/Home";
import { Profile } from "./Pages/Profile/Profile";
import { BookMark } from "./Pages/BookMark/BookMark";
import { Explore } from "./Pages/Explore/Explore";
import { Post } from "./Pages/Post/Post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:postID" element={<Post/>} />
        
      </Routes>
    </div>
  );
}

export default App;
