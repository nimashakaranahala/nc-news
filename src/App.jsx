import Homepage from "../components/Homepage";
import Header from "../components/Header"
import { Routes, Route } from "react-router-dom";
import './App.css'
import Footer from "../components/Footer"
import Topics from "../components/Topics";
import ArticleList from "../components/ArticleList";


function App() {

  return (
    <>
      <div>
   
      <Header/>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/topics" element={<Topics />} />
   
      </Routes>

      <Footer/>
    </div>

    </>
  )
}

export default App;

