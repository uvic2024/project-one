const Testimonial = ({testimony}) => {
    return ( 
        <div className="p-5 border shadow">
            <div className="d-flex border-bottom mb-3">
                <div className="name h6 d-flex justify-content-center align-items-center">{testimony.initials}</div>
                <div className="ms-2">
                    <p className="mb-1 fw-bold">{testimony.name}</p>
                    <p className="mb-0">1 review <i className="fas fa-location"></i></p>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-between mb-2">
                    <div>
                        <span><i className="fas fa-star border bg-green-c p-2"></i></span>
                        <span><i className="fas fa-star border bg-green-c p-2"></i></span>
                        <span><i className="fas fa-star border bg-green-c p-2"></i></span>
                        <span><i className="fas fa-star border bg-green-c p-2"></i></span>
                        <span><i className="fas fa-star border bg-green-c p-2"></i></span>
                    </div>
                    <div>
                        <span>{testimony.reviewDate}</span>
                    </div>
                </div>
                <p className="h4">{testimony.reviewHeading}</p>
                <p>{testimony.review}
                </p>
                <p><span className="h6">Date of experience:</span> {testimony.experienceDate}</p>
            </div>
        </div>
     );
}
 
export default Testimonial;