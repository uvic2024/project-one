import BelowTest from "../BelowTest/BelowTest";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const testimonials=[
        {
            name:'Nathalie',
            initials:'N',
            reviewDate:'Jan 19 2024',
            reviewHeading:'Highly Recommend',
            review:'The consultant was always ready to assist me in each step of the way. I was reminded of everything i had o take with me to the interview. Thanks once more.I certainly recommend the service',
            experienceDate:'Dec 01 2023',
            id:1
        },
        {
            name:'Alex',
            initials:'A',
            reviewDate:'Feb 01 2024',
            reviewHeading:'A very professional consultancy',
            review:'A very professional consultancy. Everything was done very fast and the consultant were always readily available to assist. I was reminded of all the documents which i had to take with to the interview. Thank you once more.',
            experienceDate:'Jan 05 2024',
            id:2
        }
    ]
    return ( 
        <div className="container-fluid bg-secondary-c pb-4">
            <div className="d-md-flex justify-content-md-around ">
                {testimonials &&
                    testimonials.map((testimony)=>(
                        <div className="col-md-5 col mx-md-0 mx-2 mb-md-0 mb-2 bg-secondary-2" key={testimony.id}>
                            <Testimonial testimony={testimony} />
                        </div>
                    ))
                }
            </div>
            <BelowTest />
        </div>
     );
}
 
export default Testimonials;