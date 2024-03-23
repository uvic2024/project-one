import { useEffect, useState } from "react";

const Form = ({countryog}) => {
    const [email,setEmail]=useState('')
    const [contact,setContact]=useState( '')
    const [country,setCountry]=useState(countryog)
    const [firstname,setFirstname]=useState('')
    const [fullname,setFullname]=useState('')
    const [form,setForm]=useState(true)
    const [msg,setMsg]=useState(false)
    const [appointmentLocation,setAppointmentLocation]=useState('')
    const [applicants,setApplicants]=useState(0)
    const [day,setDay]=useState(0)
    const [month,setMonth]=useState('')
    const [time,setTime]=useState('')
    const [error,setError]=useState(false)
    const handleSumbit=(e)=>{
        e.preventDefault()
        
        // console.log(email,country,form,appointmentLocation,applicants,day,month,time,firstname,fullname)
        window.scrollTo(0,0)
        fetch('https://formspree.io/f/xpzvjeow',{
            method:'POST',
            body: JSON.stringify({email,contact,country,firstname,fullname,HasFilledDS160Form:form,appointmentLocation,applicants,day,month,time}),
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
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return ( 
        <div className="container d-flex justify-content-center">
            <form action="" className="col-md-9 my-4 mx-md- mx-3" onSubmit={(e)=>handleSumbit(e)}>
                {msg &&
                    <div className="alert alert-success">
                    <strong>Thanks for you submission!</strong> We will get back to you via email/contact within 3hours.Thanks
                    </div>
                }
                {error &&
                    <div className="alert alert-danger">
                    <strong>An error occured when submitted. Please try again</strong>
                    </div>
                }
                    <div className="form-text mt-0">
                         After submitting this form. it will take us at most 3hrs to schedule a new appointment for you. One of our agents will get to you via email/contact.
                         <p>It will cost you 200 per slot.</p>
                    </div>
                <h3>General Information</h3>
                <div className="form-input">
                    <label htmlFor="email" className="h6 w-100">Email Address <i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                        <input type="email" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" required />
                    </label>
                    <div className="form-text mt-0">
                        Please make sure you enter a valid email address. We will use it to contact you about your application/appointment.
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="contact" className="h6 w-100">Contact <i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                        <input type="tel" className="form-control" name="contact" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="+1 XXX XXX-XXXX" required />
                    </label>
                    <div className="form-text mt-0">
                        WhatsApp contact is preferable . We will use it to contact you about your application/appointment.
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="country" className="h6 w-100">Country <i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                        <input type="text" className="form-control" name="country" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Enter Country" required />
                    </label>
                </div>
                {country==='Canada' && 
                    <div className="row g-3">
                        <div className="form-input col-md-6">
                            <label htmlFor="form" className="h6 w-100">Have you filled a DS160 form?<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                                <span className="mx-2">Yes</span><input type="radio" name="form" value='Yes' onChange={(e)=>setForm(true)} defaultChecked id="" />
                                <span className="mx-2">No</span><input type="radio" name="form" value='No' onChange={(e)=>setForm(false)} id="" />
                            </label>
                        </div>
                        <div className="form-input col-md-6">
                            <label htmlFor="appointmentLocation" className="h6">Where do you want your appointment booked?<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                                <input type="text" className="form-control" name="appointmentLocation" value={appointmentLocation} onChange={(e)=>setAppointmentLocation(e.target.value)} placeholder="Location of appointment" required />
                                {/* <select className="form-select">
                                <option>Montreal</option>
                                <option>Halifax</option>
                                <option>Halifax</option>
                                </select> */}
                            </label>
                        </div>
                        <div className="form-input col-md-6">
                            <label htmlFor="applicants" className="h6 w-100">How many applicants?<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                                <input type="number" className="form-control" name="applicants" value={applicants} onChange={(e)=>setApplicants(e.target.value)} placeholder="Enter number of applicants" required />
                            </label>
                        </div>
                        <div className="form-input col-md-6">
                            <label htmlFor="validationServer01" className="form-label h6">When do you want appointment booked</label>
                            <div className="row g-3 justify-content-start ms-2">
                                <input type="text" name="aDay" className="form-select col-2 w-25" value={day} onChange={(e)=>setDay(e.target.value)} placeholder="Day" />
                                <input type="text" name="aMonth" className="form-select col-4 w-50 mx-1" value={month} onChange={(e)=>setMonth(e.target.value)} placeholder="Month" />
                                <select className="form-select col-2 w-25" name="aTime" value={time} onChange={(e)=>setTime(e.target.value)}>
                                    <option value='morning'>Morning</option>
                                    <option value='afternoon'>Afternoon</option>
                                </select>
                            </div>
                        </div>
                    </div>

                }
                <div className="form-input col-md-6">
                    <label htmlFor="passport" className="h6 w-100">Do you have a valid passport?<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                        <span className="mx-2">Yes</span><input type="radio" name="passport" value='Yes' id="" />
                        <span className="mx-2">No</span><input type="radio" name="passport" value='No' id="" />
                    </label>
                </div>
                <hr />
                <h3>Applicant Information</h3>
                <div className="row g-3 my-2">
                    <div className="form-input col-md-6">
                        <label htmlFor="firstname" className="h6 w-100">
                            First name(s) or given name(s)<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                            <input type="text" name="firstname" className="form-control" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="First name(s) or given name(s)" required />
                        </label>
                        <div className="form-text">
                            Please ensure that the First name on your passport or travel document  match exactly with the information you provide.
                        </div>
                    </div>
                    <div className="form-input col-md-6">
                        <label htmlFor="lastname" className="h6 w-100">
                            Family name(s) or last name(s)<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                            <input type="text" name="lastname" className="form-control" placeholder="Family name(s) or last name(s)" required />
                        </label>
                        <div className="form-text">
                            Please ensure that the Family name on your passport or travel document  match exactly with the information you provide.
                        </div>
                    </div>
                </div>
                <div className="form-input col-md-6">
                    <label htmlFor="firstname" className="h6 w-100">
                        Full name<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                        <input type="text" name="fullname" className="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder="Full name" required />
                    </label>
                    <div className="form-text">
                         
                    </div>
                </div>
                <div className="row g-3 my-2">
                    <div className="form-input col-md-6">
                        <label htmlFor="gender" className="h6 w-100">Gender<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                            <span className="mx-2">Male</span><input type="radio" name="gender" value='male' id="" />
                            <span className="mx-2">Female</span><input type="radio" name="gender" value='female' id="" />
                        </label>
                    </div>
                    <div className="form-input col-md-6">
                        <label htmlFor="maritalStatus" className="h6">Marital Status<i className="fas fa-asterisk h6" style={{color:'red',fontSize:'xx-small'}}></i>
                            <select className="form-select">
                            <option value='married'>Married</option>
                            <option value='single'>Single</option>
                            <option value='divorced'>Divorced</option>
                            {/* <option>4</option> */}
                            </select>
                        </label>
                    </div>
                </div>
                <div className="bd-example">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="dateOfBirth" className="form-label h6">Date Of Birth</label>
                            <div className="row g-3 justify-content-start ms-2">
                                <input type="number" name="day" className="form-select col-2 w-25" placeholder="Day" />
                                <input type="text" name="month" className="form-select col-4 w-50 mx-1" placeholder="Month" />
                                <input type="number" name="year" className="form-select col-1 w-25" placeholder="Year" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cob" className="form-label h6">City of Birth</label>
                            <input type="text" className="form-control" name="cob" required=""/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rob" className="form-label h6">State/region/province of birthplace</label>
                            <div className="input-group">
                            <input type="text" className="form-control" name="rob" placeholder="State/region/province of birthplace" required=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="Cob" className="form-label h6">Country of Birth</label>
                            <input type="text" className="form-control" name="Cob" placeholder="Country of Birth" required=""/>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary-c my-2 w-100 fw-bold">Done</button>
            </form>
        </div>
     );
}
 
export default Form;