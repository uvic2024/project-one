import { Link } from "react-router-dom";

const Service2 = ({title,title2, btn,}) => {
    return ( 
        <div className="border-c rounded-3 p-4">
            <p className="h4 d-flex justify-content-center">{title}</p>
            <Link to={'/application-form/'+title2.toLowerCase()}>
                <button className={"btn my-3 w-100 " +btn}>Start Now</button>
            </Link>
            <p className="form-text d-flex justify-content-center">Best for Prior Rejection, Revocation, Overstayed, Police Records, DUI, Interviews make you nervous</p>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">INcludes all features from the U.S Visa service.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">Private 30-minute consultation with a real ex-visa officer.</p>
            </div>
            <div className="d-flex">
            <i className="fas fa-angle-right me-3 d-flex align-items-center"></i>
            <p className="form-text text-color-1">Your personal visa advisor who knows your history, stays ahead of potential obstacles and avoids any unneccessary delays.</p>
            </div>
            <div className="d-flex">
            <p className="form-text text-color-1"><i className="fas fa-asterisk me-1"></i>This service doesn't guarantee you a visa approval, only that we will find the best solution for your case.</p>
            </div>
        </div>
     );
}
 
export default Service2;