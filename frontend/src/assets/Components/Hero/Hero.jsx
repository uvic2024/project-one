import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <div className="container d-lg-flex d-none d-flex justify-content-center  mb-5">
                <div className="row  flex-lg-row-reverse align-items-center g-5 py-5 pt-2 mt-4 shadow">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./assets/img/visa-1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold lh-1 text-color-1 mb-2">Enabling dreams one visa at a time</h1>
                        <p className="lead">We are dedicated to helping you learn about obtaining a U.S visa as well as applying for your visa.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to='/application-form/us_visa_service' className="a-header-links">
                            <button type="button" className="btn btn-primary-c btn-lg px-4 me-md-2 fw-bold my-2">
                                    Get started
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" hero-mobile d-lg-none w-100">
                <div className="hero-mobile-bg">
                    <div className="hero-mobile-content py-5 px-3">
                        <div className="col mt-3">
                        <h1 className="display-4 fw-bold lh-1 text-color-2 mb-2">Enabling dreams one visa at a time</h1>
                        <p className="lead text-color-2">We are dedicated to helping you learn about obtaining a U.S visa as well as applying for your visa.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to='/application-form/us_visa_service' className="a-header-links">
                            <button type="button" className="btn btn-primary-c btn-lg px-4 me-md-2 fw-bold my-2">
                                    Get started
                            </button>
                        </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div className="container d-flex justify-content-center  mb-5">
        //     <div className="row d-md-flex d-none flex-lg-row-reverse align-items-center g-5 py-5 pt-2 mt-4 shadow">
        //         <div className="col-10 col-sm-8 col-lg-6">
        //             <img src="./assets/img/visa-1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        //         </div>
        //         <div className="col-lg-6">
        //             <h1 className="display-4 fw-bold lh-1 text-color-1 mb-2">Enabling dreams one visa at a time</h1>
        //             <p className="lead">We dedicated to helping you learn about obtaining a U.S visa as well as applying for your visa.
        //             </p>
        //             <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        //             <Link to='application-form' className="a-header-links">
        //                 <button type="button" className="btn btn-primary-c btn-lg px-4 me-md-2 fw-bold my-2">
        //                         Get started
        //                 </button>
        //             </Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="hero-mobile d-md-none w-100">
        //         <div className="hero-mobile-bg">
        //             <div className="hero-mobile-content py-4 px-2">
        //                 <div className="col mt-3">
        //                 <h1 className="display-4 fw-bold lh-1 text-color-2 mb-2">Enabling dreams one visa at a time</h1>
        //                 <p className="lead text-color-2">We dedicated to helping you learn about obtaining a U.S visa as well as applying for your visa.
        //                 </p>
        //                 <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        //                 <Link to='application-form' className="a-header-links">
        //                     <button type="button" className="btn btn-primary-c btn-lg px-4 me-md-2 fw-bold my-2">
        //                             Get started
        //                     </button>
        //                 </Link>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
     );
}
 
export default Hero;