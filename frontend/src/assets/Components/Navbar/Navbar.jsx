import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="d-flex justify-content-center align-items-center">
            <div className="mx-4"><Link to='/' className="a-header-links">Home</Link></div>
            <div className="mx-4"><Link to='/about' className="a-header-links">About Us</Link></div>
            <div className="mx-4"><Link to='/contact-us' className="a-header-links">Contact Us</Link></div>
            <div className="mx-4"><Link to='/faqs' className="a-header-links">FAQs</Link></div>
        </div>
     );
}
 
export default Navbar;