import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <nav>
     <ul className="nav-ul">
       <Link className="nav-li a-link" to="/">TODO-app</Link>
       <Link className="nav-li a-link" to="/">Tasks</Link>
       </ul>
   </nav>
   
  );
}

export default Navbar;
