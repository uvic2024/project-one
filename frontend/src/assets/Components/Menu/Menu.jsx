import { Link } from "react-router-dom";

const Menu = ({setMenu}) => {
    return ( 
        <div>
            <div className="menu-bg">
                <div className="menu-left h-100 w-25" onClick={()=>setMenu(false)}>

                </div>
                <div className="menu-content p-5">
                    <div className="mx-4 py-2 "><Link to='/' className="a-header-links" onClick={()=>setMenu(false)}>Home</Link></div>
                    <div className="mx-4 py-2 "><Link to='/about' className="a-header-links" onClick={()=>setMenu(false)}>About Us</Link></div>
                    <div className="mx-4 py-2 "><Link to='/contact-us' className="a-header-links" onClick={()=>setMenu(false)}>Contact Us</Link></div>
                    <div className="mx-4 py-2 "><Link to='/faqs' className="a-header-links" onClick={()=>setMenu(false)}>FAQs</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;