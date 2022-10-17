import "./index.css"
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import NavBar from "./main/NavBar"
import Home from "./main/Home"
import Footer from "./main/Home/footer"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import About from "./main/about"
import Contact from "./main/contact"
import Projects from "./main/projects"
import Blogs from "./main/blogs"
import ProjectDetails from "./main/projects/projectDetails"
import data2 from "./main/data/web.json"
import data3 from "./main/data/art.json"
import data4 from "./main/data/print.json"
import data5 from "./main/data/photoshop.json"
import data6 from "./main/data/development.json"
import { useState } from "react"

function App() {
  const [articleComment, setArticleComment] = useState(false)

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home articleComment={articleComment} setArticleComment={setArticleComment}/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Projects/*" element={<Projects  articleComment={articleComment} setArticleComment={setArticleComment}/>}/>
          <Route path="/blogs/*" element={<Blogs  articleComment={articleComment} setArticleComment={setArticleComment}/>}/>
          <Route path="/projectDetails/web/:id" element={<ProjectDetails articleComment={articleComment} setArticleComment={setArticleComment}  data={data2}/>}/>
          <Route path="/projectDetails/art/:id" element={<ProjectDetails articleComment={articleComment} setArticleComment={setArticleComment} data={data3}/>}/>
          <Route path="/projectDetails/print/:id" element={<ProjectDetails articleComment={articleComment} setArticleComment={setArticleComment} data={data4}/>}/>
          <Route path="/projectDetails/photoshop/:id" element={<ProjectDetails articleComment={articleComment} setArticleComment={setArticleComment} data={data5}/>}/>
          <Route path="/projectDetails/development/:id" element={<ProjectDetails articleComment={articleComment} setArticleComment={setArticleComment} data={data6}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
