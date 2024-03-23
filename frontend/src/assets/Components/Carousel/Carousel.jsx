const Carousel = () => {
    return ( 
        <div className="container mb-4">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./assets/img/img-1.jpg" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./assets/img/img-2.jpg" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./assets/img/img-3.jpg" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./assets/img/img-4.jpg" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./assets/img/img-5.jpg" className="d-block w-100"/>
                    </div>
                </div>

                <button className="carousel-control-prev text-dark" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
     );
}
 
export default Carousel;