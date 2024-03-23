import { Link } from "react-router-dom";
import Service from "../Service/Service";
import Service2 from "../Service/Service2";

const Services = () => {
    return ( 
        <div className="container my-5">
            <div className="d-flex justify-content-center">
                <p className="h2 services">Our Services</p>
            </div>
            <div className="container d-md-flex justify-content-between my-4 px-0">
                <div className="col-md-3">
                    <Service title="U.S Visa Service" title2="US_Visa_Service" btn="btn-outline-primary-c" />
                </div>
                <div className="col-md-3 my-md-0 my-3">
                    <Service title="U.S ESTA" title2="US_ESTA" btn="btn-primary-c" />
                </div>
                <div className="col-md-3">
                    <Service2 title="U.S VISA VIP" title2="US_VISA_VIP" btn="btn-outline-primary-c" vip={true} />
                </div>
            </div>
            <div>
                <p className="h4"><Link to='/contact-us'> Don't know what sort of visa will best suit your situation? Get to us</Link></p>
            </div>
        </div>

     );
}
 
export default Services;