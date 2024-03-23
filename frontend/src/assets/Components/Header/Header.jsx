import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = ({setMenu,menu}) => {
    return ( 
        <div className=" d-flex p-md-4 p-3 justify-content-between header-c">
            <div className="logo d-flex align-items-center position-relative w-100">
                
                <div className="h3 me-2 mb-0 mt-2">
                <i className="fas fa-archway"></i>
                </div>
                <div>
                    <Link to='/' className="a-header">
                        <p className="mb-0 h4">USA Immigration</p>
                        <p className="mb-0 h5 cons" style={{letterSpacing:'.38em'}}>Consultants</p>
                    </Link>
                </div>
                
                <i className="fas fa-trademark position-absolute fa-sm tm" style={{top:'.1em',left:'224px'}}></i>
                {/* <p className="mb-0">UIC</p> */}
            </div>
            <div className="navbar d-md-flex justify-content-md-end d-none w-100">
                <Navbar />
            </div>
            <div className="lang d-flex align-items-center">
                <div className="dropdown d-md-flex d-none">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                    Language
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e)=>e.preventDefault()}>English <i className="fas fa-check"></i></a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e)=>e.preventDefault()}>French</a></li>
                    {/* <li><a className="dropdown-item" href="#">Spanish</a></li> */}
                </ul>
                </div>
                {/* <button className="btn btn-danger dropdown-toggle d-md-flex d-none">English <i className=""></i></button> */}
                <i className={(menu)?"fas fa-times text-color-1 position-fixed me-4 d-md-none":"fas fa-bars d-md-none"} style={{zIndex:'25'}} onClick={()=>setMenu(!menu)}></i>
            </div>
        </div>
     );
}
 
export default Header;