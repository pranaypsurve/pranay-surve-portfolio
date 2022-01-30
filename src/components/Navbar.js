import {NavLink} from 'react-router-dom';
// import {Link} from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import './style.css';
const Navbar = () => {
  console.log(`
  ██╗░░██╗███████╗██╗░░░░░██╗░░░░░░█████╗░  ░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░░░░██████╗░
  ██║░░██║██╔════╝██║░░░░░██║░░░░░██╔══██╗  ░██║░░██╗░░██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗
  ███████║█████╗░░██║░░░░░██║░░░░░██║░░██║  ░╚██╗████╗██╔╝██║░░██║██████╔╝██║░░░░░██║░░██║
  ██╔══██║██╔══╝░░██║░░░░░██║░░░░░██║░░██║  ░░████╔═████║░██║░░██║██╔══██╗██║░░░░░██║░░██║
  ██║░░██║███████╗███████╗███████╗╚█████╔╝  ░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║███████╗██████╔╝
  ╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝░╚════╝░  ░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░
  
  Hi Geek, 
  I love to be friends with like minded people. Message me, maybe we could help each other.
  Cheers,
  Pranay Surve
  mailto: pranaysurve51@gmail.com`);
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-light bg-dark">
        <div className="container">
          <NavLink className="navbar-brand text-white " to="/">{`<Pranay />`}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" ><HomeIcon style={{ marginBottom: "6px" }} />Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-link"><ManageAccountsIcon style={{ marginBottom: "6px" }} />About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/project"><OpenInNewIcon style={{ marginBottom: "6px" }} /> Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/resume"><WorkOutlineIcon style={{ marginBottom: "6px" }} /> Hire Me</NavLink>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="contactSection" smooth={true} duration={1000}>Reach Me</Link> */}
                <NavLink exact className="nav-link" to="/contact"><OpenInNewIcon style={{ marginBottom: "6px" }} /> Reach Me</NavLink>
              </li>
              {/*<li className="nav-item">
                <NavLink exact className="nav-link" to="/blogs"><RssFeedIcon style={{ marginBottom: "6px" }} /> Blogs</NavLink>
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>
      );
}
                    export default Navbar;