import emailjs from 'emailjs-com';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css';
import { useState , useEffect } from 'react';
// console.log('Okkkkk , ------ You are Here !! , If any Error Found Report to developer. Thank You');
const Contact = ()=>{
    // console.log.log(50);
    const [formSate , setForm] = useState({
        name:'',
        email:'',
        subject:'',
        message:'' 
    });
    const [isLoding,setLoding] = useState({
        loadder:false
    })
    const [formSubmitMsg,setFormSubmitMsg] = useState({
        msg:''
    })
    const contactFormSection = {
        paddingTop:'5rem',
        paddingBottom:'5rem',
        // backgroundColor:'orange'
    }
    const formStyle = {
        backgroundColor:"white",
        padding: "3rem"
    }
    useEffect(()=>{
        // set title of document
        document.title = 'Contact Form';
    },[]);
    const handleInput = (e)=>{
        e.preventDefault();
        setForm({...formSate,[e.target.name]:e.target.value});
        // console.log(formSate);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoding({loadder:true});
        const templateParams = {
            yourname: formSate.name,
            email: formSate.email,
            subject:formSate.subject,
            message:formSate.message
        };
        console.log(process.env.REACT_APP_EMAIL_SERVICE,'magic');
        emailjs.send(process.env.REACT_APP_EMAIL_SERVICE,process.env.REACT_APP_EMAIL_TEMPLATE, templateParams, process.env.REACT_APP_EMAIL_USERID)
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        clearForm(); setLoding({loadder:false})
        setFormSubmitMsg({msg:'Message Sent'});
        }, (err) => {
        console.log('FAILED...', err);
        setFormSubmitMsg({msg:'Message Not Sent'})
        });
        setTimeout(()=>{ setFormSubmitMsg({msg:''}) },4000);
    }
    const clearForm = ()=>{
        setForm({
            name:'',
            email:'',
            subject:'',
            message:'' 
        });
    }
    return(
        <>
        <section className="" style={contactFormSection} id='contactSection'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 m-auto" style={formStyle}>
                        <div className="row">
                            <div className="col-md-6">
                            <h2 className="formTitle mb-5">Send A Message</h2>
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input type="text" onChange={handleInput} value={formSate.name} name="name" placeholder="Your Name" className="form-control" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" onChange={handleInput} value={formSate.email} name="email" placeholder="Email" className="form-control" required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" onChange={handleInput} value={formSate.subject} name="subject" placeholder="Subject" className="form-control" required />
                                </div>
                                <div className="mb-4">
                                    <textarea rows="4" onChange={handleInput} value={formSate.message} name="message" placeholder="Message" className="form-control" required />
                                </div>
                                <div className="mb-4">
                                    {isLoding.loadder ? <button type="submit" className="btn btn-success rounded-pill" disabled>
                                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Submitting Form</button> : <button type="submit" className="btn btn-success rounded-pill">Send Message</button> }
                                    <span className='' style={{fontSize:"25px",paddingLeft:"15px"}} >{formSubmitMsg.msg}</span>
                                </div>
                                
                            </form>
                            </div>
                            <div className="col-md-6">
                                <h2 className="formTitle mb-5">Get in Touch</h2>
                                <p className="lead">
                                    Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                                    Simply fill the from and send me an email.
                                </p>
                                <div className='socials'>
                                    <ul>
                                        <li><a href='https://github.com/pranaypsurve' target="_blank"><GitHubIcon style={{fontSize:"30px"}}></GitHubIcon></a></li>
                                        <li><a href='https://in.linkedin.com/in/pranay-surve-63b203193' target="_blank"><LinkedInIcon style={{fontSize:"30px"}}></LinkedInIcon></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
        </>
    )
}
export default Contact;