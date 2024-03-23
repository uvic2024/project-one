import { Link } from "react-router-dom";

const BelowNav = () => {
    return ( 
        <div className=" d-flex justify-content-center py-2 belowNav border-top">
            <p className="mb-0 h6 d-flex"><img src="./assets/img/canada.png" className="img-fluid" style={{width:'2em'}} alt="" /><Link to='/canadian-form'>Canadian applying for a U.S Visa? Click here</Link></p>
            {/* <div className="col-md-6 border-c p-4 d-flex justify-content-center align-items-center mx-2">
                <p className="h4">Services include US visas for tourism,travel,business,study and transit</p>
            </div>
            <div className="col-md-6 border-c p-4 d-flex justify-content-center align-items-center mx-2">
                <i className="fas fa-clock me-4 display-4"></i>
                <p className="h4">
                    24/7 fast application and simplified form
                </p>
            </div> */}
        </div>
     );
}
 
export default BelowNav;