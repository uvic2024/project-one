import Testimonials from "../Testimonials/Testimonials";

const TrustPilot = () => {
    return ( 
        <div className=" d-flex justify-content-center py-5 bg-secondary-c">
            <div>
                <div className="">
                    <p className="h4">
                        <i className="fas fa-star me-2" style={{color:'#17ac67'}}></i>
                        Trustpilot
                    </p>
                </div>
                <div>
                    <span><i className="fas fa-star border bg-green-c h4 p-2"></i></span>
                    <span><i className="fas fa-star border bg-green-c h4 p-2"></i></span>
                    <span><i className="fas fa-star border bg-green-c h4 p-2"></i></span>
                    <span><i className="fas fa-star border bg-green-c h4 p-2"></i></span>
                    <span><i className="fas fa-star-half border bg-gray-c h4 p-2"></i></span>
                </div>
                <div>
                    <p>TrustScore <span className="h6">4.4</span> | <span className="h6">987</span> reviews</p>
                </div>
            </div>
            {/* <Testimonials /> */}
        </div>
     );
}
 
export default TrustPilot;