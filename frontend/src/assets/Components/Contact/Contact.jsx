const Contact = () => {
    return ( 
        <div className="container">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <p className="col-lg-10 fs-4">Email <a href="usavisainfo@gmail.com">usavisainfo@gmail.com</a>.</p>
                    <p className="col-lg-10 fs-4">Contact +1 234 56789</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={(e)=>e.preventDefault()}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" className="form-control"></textarea>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary-c" type="submit">Send</button>
                    <hr className="my-4"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;