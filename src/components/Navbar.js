import { Link } from "react-router-dom";

function Navbar(params) {
    return <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/"><a>Home</a></Link></li>
        
        <li><Link to="/create"><a>Create</a></Link></li>
      </ul>
    </div>
  </div>
}

export default Navbar