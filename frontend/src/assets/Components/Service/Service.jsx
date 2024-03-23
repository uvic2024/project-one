import { Link } from "react-router-dom";

const Service = ({title, title2,btn,}) => {
    return ( 
        <div className="border-c rounded-3 p-4">
            <p className="h4 d-flex justify-content-center">{title}</p>
            <Link to={'/application-form/'+title2.toLowerCase()}>
                <button className={"btn my-3 w-100 " +btn}>Start Now</button>
            </Link>
            <p className="form-text d-flex justify-content-center">Features included in the package</p>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">All the perks of a personal visa consultant.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">24/7 limitless support, anywhere in the world.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">Application review,invitation letter,interview guid.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">Application review,invitation letter,interview guid.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">Many More.</p>
            </div>
        </div>
     );
}
 
export default Service;