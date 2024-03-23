import { useEffect, useState } from "react";
const Contact = () => {
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [msg,setMsg]=useState(false)
    const [error,setError]=useState(false)
    const handleSumbit=(e)=>{
        e.preventDefault()
        fetch('https://formspree.io/f/xpzvjeow',{
            method:'POST',
            body: JSON.stringify({email,message}),
            headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
            if (response.ok) {
                setMsg(true)
            } else {
              setError(true)
            }
          }).catch(error => {
            setMsg(false)
            setError(true)
          });
    }
    return ( 
        <div className="container">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <p className="col-lg-10 fs-4">Email <a href="usavisainfo@gmail.com">usavisainfo@gmail.com</a>.</p>
{/*                     <p className="col-lg-10 fs-4">Contact +1 234 56789</p> */}
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    {msg &&
                    <div className="alert alert-success">
                    <strong>Thanks for you submission!</strong> We will get back to you shortly.
                    </div>
                    }
                    {error &&
                    <div className="alert alert-danger">
                    <strong>An error occured when submitted. Please try again</strong>
                    </div>
                    }
                    <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <label htmlFor="message" className="pt-0">Message</label>
                        <textarea name="message" className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
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
