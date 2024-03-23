const Footer = () => {
    return ( 
        <div className="bg-custom  pt-5 px-5 mb-0 position-absolute">
            <h3>USA Immigration Consultants</h3>
            <p>Disclaimer: UIC is not affilliated with any United States government agency or department. This website does not provide legal advice
            and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a 
            private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply 
            by yourself directly at 
            {/* <a className="a-header" href="https://travel.state.gov">travel.state.gov</a>  */}
            <a className="a-header" href="#" onClick={(e)=>e.preventDefault()}> travel.state.gov </a>
            or at 
            <a className="a-header" href="#" onClick={(e)=>e.preventDefault()}> uscis.gov </a>
            {/* <a className="a-header" href="https://uscis.gov">uscis.gov</a> */}
            </p> 
            <div className="d-md-flex jsutify-content-md-between">
                <div className="col">Terms of service</div>
                <div className="col">Privacy Policy</div>
                <div className="col">Refund Policy</div>
            </div>
            <div className="d-flex justify-content-center my-2 border-top">
                <p>Copyright <i className="fas fa-copyright"></i> 2019-2024 USA Immigration Consultants(UIC), All Rights Reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;