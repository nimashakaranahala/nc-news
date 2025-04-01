import { Link } from "react-router-dom";
function Nav(){
    return (<nav className="nav-bar">
    <ul >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/articles">All Articles</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      
    </ul>
  </nav>

    )}

export default Nav